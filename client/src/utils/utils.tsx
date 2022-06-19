export const currencyFormartter = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  notation: 'compact',
});

export const Formatter = new Intl.NumberFormat('en-UK', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  notation: 'compact',
});
export const percentageFormatter = new Intl.NumberFormat('en-UK', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
