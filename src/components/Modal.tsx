import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useEffect, useMemo } from "react";
import { generateUid } from "../helpers";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { Expense } from "../interfaces";

interface Props {
  closeModal: () => void;
}

interface HandleSubmitProps {
  description: string;
  amount: number;
  category: string;
}

interface FormDataErrors {
  amount?: string;
  description?: string;
  category?: string;
}

export const Modal = ({ closeModal }: Props) => {

  const { state, dispatch } = useBudgetContext();

  const { currentActive } = state;

  const handleSubmit = ({ description, amount, category }: HandleSubmitProps) => {
    if (currentActive !== null) {
      dispatch({ type: 'edit_expense', payload: { ...currentActive, description, amount, category } })
    } else {
      const id = generateUid();
      const date = Date.now();
      const newExpense: Expense = { description, amount, category, id, date }
    
      dispatch({ type: 'add_expense', payload: newExpense })
    }
    closeModal();
    dispatch({ type: 'set_expense_active', payload: null })
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const initialFormData: HandleSubmitProps = useMemo(() => ({
    description: currentActive?.description ?? '',
    amount: currentActive?.amount ?? 0,
    category: currentActive?.category ?? ''
  }), [currentActive])

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={'assets/icons/cerrar.svg'}
          alt="Close Modal"
          onClick={() => {
            closeModal();
            dispatch({ type: 'set_expense_active', payload: null })
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Formik
          initialValues={initialFormData}
          validate={(values) => {
            const errors: FormDataErrors = { };
            if (Number(values.amount) < 0 || !Number(values.amount)) {
              errors.amount = "Invalid amount";
            }
            if (values.description == "") {
              errors.description = "Required";
            }
            if (values.category == "") {
              errors.category = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit({ ...values });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="formulario animate__animated animate__fadeIn animate__fast">
              <legend>{currentActive ? 'Edit' : 'New'} Expense</legend>
              <div className="campo">
                <label htmlFor="description">Description</label>
                <Field
                  name="description"
                  type="text"
                  placeholder="Description of the expense"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error_form_validation"
                />
              </div>
              <div className="campo">
                <label htmlFor="amount">Amount</label>
                <Field
                  id="amount"
                  name="amount"
                  type="text"
                  placeholder="How much, eg. 300"
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className="error_form_validation"
                />
              </div>
              <div className="campo">
                <label htmlFor="category">Category</label>
                <Field name="category" id="category" as="select">
                  <option value=""> -- Select --</option>
                  <option value="food">Food</option>
                  <option value="hobby">Hooby</option>
                  <option value="movies">Movies</option>
                  <option value="home">Home</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error_form_validation"
                />
              </div>
              <input
                type="submit"
                value={currentActive ? 'Edit expense' : 'Add Expense'}
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
