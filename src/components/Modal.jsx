import OrganizationPicker from './OrganizationPicker';
import React,{useEffect,useRef} from 'react';
import {createPortal} from 'react-dom';
import {usePage} from './PageContext';

export default function Modal({id,open,onClose,children,className='',title,...props}) {
  const page=usePage(),ref=useRef(null);
  const visible=open ?? page.modal===id;
  const close=onClose || (()=>page.setModal(null));
  const closeRef=useRef(close);closeRef.current=close;
  useEffect(()=>{
    if(!visible)return;
    const previous=document.activeElement;
    const overflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const focusable=()=>[...ref.current.querySelectorAll('button:not([disabled]),a[href],input:not([type=hidden]),select,textarea,[tabindex="0"]')].filter(e=>e.getClientRects().length);
    (focusable()[0]||ref.current).focus();
    function keys(e){if(e.key==='Escape')closeRef.current();if(e.key==='Tab'){const list=focusable();const first=list[0],last=list.at(-1);if(!first){e.preventDefault();return;}if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}
    document.addEventListener('keydown',keys);
    return()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',keys);previous?.focus();};
  },[visible]);
  if(!visible)return null;
  return createPortal(<div {...props} id={id} ref={ref} className={`${className} modal in hgms-modal`} role="dialog" aria-modal="true" aria-label={title||id||'Dialog'} tabIndex={-1} onMouseDown={e=>{if(e.target===e.currentTarget)close();}}><button className="hgms-modal-close" aria-label="Close dialog" type="button" onClick={close}>×</button>{id==='global-organizations'?<OrganizationPicker onClose={close}/>:children}</div>,document.body);
}
