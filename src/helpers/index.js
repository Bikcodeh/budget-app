export const moneyFormatter = (amount) => {
    return Number(amount).toLocaleString('en-US', { style: 'currency', currency: 'USD'});
}

export const generateUid = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
}