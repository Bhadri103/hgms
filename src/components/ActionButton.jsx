import React from 'react';
import {usePage} from './PageContext';
import {excelExportClass} from './exportStyle';
export default function ActionButton({children,behavior='',type,...props}) {
  const page=usePage();
  const organizationTrigger=/GymSwitcher|gymSwitcher|AeOrgModal|gym.*modal/i.test(props['data-target']||'') || /openAi.*GymModal/.test(behavior);
  function click(e) {
    const button=e.currentTarget;
    if(organizationTrigger){e.preventDefault();page.setModal('global-organizations');return;}
    if(button.closest('a'))return;
    if(props['data-dismiss']==='modal'||/close.*Modal/i.test(behavior)){e.preventDefault();page.setModal(null);return;}
    if(props['data-toggle']==='modal'){e.preventDefault();page.setModal(props['data-target']?.replace('#',''));return;}
    if(/navbar-toggle|navigation-toggler/.test(props.className||'')){page.setSidebar(v=>!v);return;}
    if(/print/i.test(behavior)){window.print();return;}
    if(/export|csv|excel/i.test(button.textContent)){e.preventDefault();page.exportTable();return;}
    if(/reset/i.test(button.textContent)){button.form?.reset();page.setFilters({});return;}
    if(props.id==='btn_single'||props.id==='btn_range'){const range=props.id==='btn_range';['inline_single','row_single'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display=range?'none':'flex';});['inline_range','row_range'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display=range?'flex':'none';});button.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===button));return;}
    if(/switchPhotoMode|switchIdMode/.test(behavior)) {
      const webcam=behavior.includes('webcam'),n=behavior.match(/\((\d)/)?.[1];
      const pairs=n?[`idUploadSection${n}`,`idWebcamSection${n}`]:['photoUploadSection','photoWebcamSection'];
      pairs.forEach((id,i)=>{const el=document.getElementById(id);if(el)el.style.display=(i===1)===webcam?'block':'none';});return;
    }
    if(/toggleSectionBlock/.test(behavior)){const id=behavior.match(/'([^']+)'/)?.[1],el=document.getElementById(id);if(el){const opening=getComputedStyle(el).display==='none';el.style.display=opening?'block':'none';button.textContent=opening?'Hide':'Show';}return;}
    if(/start.*Cam|startIdWebcam/.test(behavior)){page.notify('Camera capture requires a connected camera and browser permission. Use Upload to select a local image.','error');return;}
    if(/clear.*Photo|clearIdFile|clearIdCam/.test(behavior)){const area=button.closest('.form-group')||button.parentElement;area.querySelectorAll('input[type=file]').forEach(el=>el.value='');return;}
    if(/openAi.*GymModal/.test(behavior)){page.setModal('gymSwitcherModal');return;}
    if(/submitEnroll/.test(behavior)){page.notify('Enrollment has been recorded locally; no biometric device is connected.');return;}
    if(/refreshForgotCaptcha/.test(behavior)){page.notify('Local demo captcha: HGMS');return;}
    if(props.onClick)props.onClick(e);
  }
  return <button {...props} className={`${props.className || ''}${excelExportClass(children)}`} type={type||'button'} onClick={click}>{organizationTrigger?page.organization.name:children}</button>;
}
