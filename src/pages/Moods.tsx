import React, { useState } from 'react';

const wrapper: React.CSSProperties = { maxWidth:900, margin:'24px auto', padding:20 };
const card: React.CSSProperties = { background:'rgba(8,6,28,0.82)', padding:16, borderRadius:12, color:'#fff' };
const MOODS = [
  {value:'excellent',label:'Excellent',emoji:'😁'},
  {value:'good',label:'Good',emoji:'😊'},
  {value:'okay',label:'Okay',emoji:'😐'},
  {value:'down',label:'Down',emoji:'😟'},
  {value:'sad',label:'Sad',emoji:'😢'},
];

export default function Moods(){
  const [history,setHistory] = useState<{m:string,t:number}[]>([]);
  const log = (m:string)=>setHistory(h=>[{m,t:Date.now()} as any,...h]);
  return (
    <div style={wrapper}>
      <h1>Log Mood</h1>
      <div style={card}>
        <p style={{opacity:0.8}}>Quick mood logger. Hook this up to your store to persist entries.</p>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          {MOODS.map(m=> (
            <button key={m.value} onClick={()=>log(m.value)} style={{padding:12,borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',minWidth:86}}>
              <div style={{fontSize:20}}>{m.emoji}</div>
              <div style={{fontSize:12,opacity:0.9}}>{m.label}</div>
            </button>
          ))}
        </div>
        <h3 style={{marginTop:18}}>Recent</h3>
        <ul>
          {history.length===0 && <li style={{opacity:0.7}}>No moods logged yet.</li>}
          {history.map((h,idx)=> <li key={idx}>{MOODS.find(x=>x.value===h.m)?.emoji} {MOODS.find(x=>x.value===h.m)?.label} — {new Date(h.t).toLocaleString()}</li>)}
        </ul>
      </div>
    </div>
  );
}
