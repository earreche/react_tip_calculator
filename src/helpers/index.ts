export function formatCurrency(n: number){
  return Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD'}
  ).format(n)
}