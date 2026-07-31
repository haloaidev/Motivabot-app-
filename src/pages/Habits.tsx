import React, { useState } from 'react';

const wrapper: React.CSSProperties = { maxWidth:900, margin:'24px auto', padding:20 };
const card: React.CSSProperties = { background:'rgba(8,6,28,0.82)', padding:16, borderRadius:12, color:'#fff' };

export default function Habits(){
  const [habits,setHabits] = useState<{text:string,done:boolean}[]>([
    {text:'Drink 8 glasses of water',done:false},{text:'Exercise 30 min',done:false},{text:'Meditate 10 min',done:false}
  ]);
  const toggle=(i:number)=>setHabits(h=>h.map((it,idx)=> idx===i?{...it,done:!it.done}:it));
  return (
    <div style={wrapper}>
      <h1>Habits</h1>
      <div style={card}>
        <p style={{opacity:0.8}}>Track daily habits. For demo purposes this state is ephemeral.</p>
        <ul>
          {habits.map((h,idx)=>(
            <li key={idx} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 0'}}>
              <label style={{display:'flex',alignItems:'center',gap:8}}>
                <input type="checkbox" checked={h.done} onChange={()=>toggle(idx)} />
                <span style={{textDecoration:h.done?'line-through':'none'}}>{h.text}</span>
              </label>
              <small style={{opacity:0.6}}>{h.done? 'Done':'Pending'}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
