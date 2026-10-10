import React,{useEffect,useState} from 'react';
import QRCode from 'qrcode';
export default function AttendanceQR({value, name = 'HGMS'}) {
  const [result,setResult]=useState({});
  useEffect(()=>{
    let active=true;
    QRCode.toDataURL(value,{width:400,margin:4,errorCorrectionLevel:'M',color:{dark:'#000000',light:'#ffffff'}})
      .then(src=>{if(active)setResult({value,src});})
      .catch(()=>{if(active)setResult({value,error:true});});
    return()=>{active=false;};
  },[value]);
  if(result.value!==value)return <p role="status">Preparing QR code...</p>;
  if(result.error)return <p role="alert">Unable to generate the QR code. Please reload this page.</p>;
  return <img src={result.src} alt={`Attendance QR code for ${name}`} width="400" height="400"/>;
}
