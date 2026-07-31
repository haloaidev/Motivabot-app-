import React, { useState } from 'react';

const wrapper: React.CSSProperties = { maxWidth:900, margin:'24px auto', padding:20 };
const card: React.CSSProperties = { background:'rgba(8,6,28,0.82)', padding:16, borderRadius:12, color:'#fff' };

export default function Settings(){
  const [name,setName] = useState('');
  const [zodiac,setZodiac] = useState('');
  return (
    <div style={wrapper}>
      <h1>Settings</h1>
      <div style={card}>
        <label style={{display:'block',marginBottom:8}}>Display Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" style={{padding:10,borderRadius:8,width:'100%'}} />
        <label style={{display:'block',marginTop:12,marginBottom:8}}>Zodiac Sign (optional)</label>
        <input value={zodiac} onChange={e=>setZodiac(e.target.value)} placeholder="e.g. leo" style={{padding:10,borderRadius:8,width:'100%'}} />
        <div style={{marginTop:14,display:'flex',gap:8}}>
          <button style={{padding:'10px 12px',borderRadius:8}}>Save</button>
          <button style={{padding:'10px 12px',borderRadius:8,background:'transparent'}}>Reset</button>
        </div>
      </div>
    </div>
  );
}
