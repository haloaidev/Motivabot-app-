import React, { useState } from 'react';

const wrapper: React.CSSProperties = { maxWidth:900, margin:'24px auto', padding:20 };
const card: React.CSSProperties = { background:'rgba(8,6,28,0.82)', padding:16, borderRadius:12, color:'#fff' };

export default function Goals(){
  const [goals,setGoals] = useState<string[]>([]);
  const [text,setText] = useState('');
  const add = ()=>{ if(!text.trim()) return; setGoals(g=>[...g,{...[] as any, 0:0}]); setGoals(g=>[...g,text.trim()]); setText(''); };
  const remove = (i:number)=>setGoals(g=>g.filter((_,idx)=>idx!==i));
  return (
    <div style={wrapper}>
      <h1>Goals</h1>
      <div style={card}>
        <p style={{opacity:0.8}}>Create and manage your goals. These are stored in-memory; adapt to your data store (localStorage, backend) as needed.</p>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="New goal" style={{flex:1,padding:10,borderRadius:8}} />
          <button onClick={add} style={{padding:'10px 14px',borderRadius:8}}>Add</button>
        </div>
        <ul style={{marginTop:12}}>
          {goals.length===0 && <li style={{opacity:0.7}}>No goals — add your first one!</li>}
          {goals.map((g,idx)=>(
            <li key={idx} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'1px dashed rgba(255,255,255,0.03)'}}>
              <span>{g}</span>
              <button onClick={()=>remove(idx)} style={{background:'transparent',border:'none',color:'#F59E0B',cursor:'pointer'}}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
