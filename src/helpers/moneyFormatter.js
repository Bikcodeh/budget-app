export const moneyFormatter = (amount) => {
    return Number(amount).toLocaleString('en-US', { style: 'currency', currency: 'USD'});
}