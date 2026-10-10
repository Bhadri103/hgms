export function invoiceTotals({amount=0,discount=0,discountType='amount',taxRate=0,taxIncluded=false,paid=0,enrollment=0}) {
  const number=v=>Math.max(0,Number(v)||0), round=v=>Math.round((v+Number.EPSILON)*100)/100;
  const gross=number(amount)+number(enrollment);
  const reduction=discountType==='percent'?gross*Math.min(100,number(discount))/100:Math.min(gross,number(discount));
  const discounted=gross-reduction;
  const tax=taxIncluded?discounted-discounted/(1+number(taxRate)/100):discounted*number(taxRate)/100;
  const total=taxIncluded?discounted:discounted+tax;
  return {subtotal:round(discounted-(taxIncluded?tax:0)),discount:round(reduction),tax:round(tax),total:round(total),due:round(Math.max(0,total-number(paid)))};
}
export function addDays(date,days) { const value=new Date(date+'T12:00:00Z'); if(Number.isNaN(value.getTime()))return '';value.setUTCDate(value.getUTCDate()+Number(days));return value.toISOString().slice(0,10); }
