import {Children} from 'react';

// Only label text is inspected so links wrapping an export button aren't styled twice.
export function excelExportClass(children) {
  const label = Children.toArray(children).filter(child => typeof child === 'string').join(' ');
  return /\bexport\b/i.test(label) ? ' btn-excel' : '';
}
