import { Formik, Form, Field, ErrorMessage } from "formik";
import CloseIcon from "/assets/icons/cerrar.svg";
import { useContext, useEffect, useMemo } from "react";
import { BudgetContext } from "../context/budgetContext";
import { generateUid } from "../helpers";

export const Modal = ({ closeModal }) => {
  const { addExpense, editExpense, currentActive, setExpenseActive } =
    useContext(BudgetContext);
  const handleSubmit = ({ description, amount, category }) => {
    if (currentActive !== null) {
      editExpense({ ...currentActive, description, amount, category})
    } else {
      const id = generateUid();
      const date = Date.now();
      addExpense({ description, amount, category, id, date });
    }
    closeModal();
    setExpenseActive(null);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const initialFormData = useMemo(() => ({
    description: currentActive?.description ?? '',
    amount: currentActive?.amount ?? 0,
    category: currentActive?.category ?? ''
  }), [currentActive])

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseIcon}
          alt="Close Modal"
          onClick={() => {
            closeModal();
            setExpenseActive(null);
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
          initialValues={{ ...initialFormData }}
          validate={(values) => {
            const errors = {};
            if (values.amount < 0 || !Number(values.amount)) {
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
              <legend>{ currentActive ? 'Edit' : 'New'} Expense</legend>
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
                value={ currentActive ? 'Edit expense' : 'Add Expense'}
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
