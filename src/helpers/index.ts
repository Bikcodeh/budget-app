export const moneyFormatter = (amount: string): string => {
    return Number(amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const generateUid = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
}

export const formatDate = (date: number): string => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', {
        year:   'numeric',
        month:  'long',
        day:    '2-digit'
    });
}