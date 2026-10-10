import {brand} from '../config/brand.js';
export const formatMoney = value => new Intl.NumberFormat(brand.locale,{style:'currency',currency:brand.currencyCode,maximumFractionDigits:2}).format(Number(value)||0);
export const isMoneyColumn = label => !/percent|%|date|days|count|quantity|qty|number|type|mode|status|name/i.test(label) && /amount|price|salary|subtotal|^total$|^paid$|^due$|^collection$|^discount$|^tax$|^balance amount$|^opening balance$|^closing balance$|^closing position$|^expenses$/i.test(label);
export function moneyCell(label,value) {
  const text=String(value??'');
  return isMoneyColumn(label)&&/^\s*-?\d[\d,]*(\.\d+)?\s*$/.test(text)?formatMoney(text.replaceAll(',','')):value;
}
export const moneyLabel = label => isMoneyColumn(label)?`${label} (${brand.currencyCode})`:label;
