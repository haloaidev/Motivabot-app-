import React from 'react';
import { Link } from 'react-router-dom';

const container: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 900, margin: '24px auto', padding: 20 };
const card: React.CSSProperties = { background: 'rgba(8,6,28,0.82)', borderRadius: 12, padding: 18, color: '#FFF' };

export default function Home() {
  return (
    <main style={container}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 style={{margin:0}}>Welcome to MotivaBOT</h1>
        <small style={{opacity:0.7}}>Your personal motivation dashboard</small>
      </div>

      <section style={card}>
        <h2 style={{marginTop:0}}>Quick Actions</h2>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <Link to="/goals"><button style={{padding:'10px 14px',borderRadius:8}}>View Goals</button></Link>
          <Link to="/moods"><button style={{padding:'10px 14px',borderRadius:8}}>Log Mood</button></Link>
          <Link to="/habits"><button style={{padding:'10px 14px',borderRadius:8}}>Track Habits</button></Link>
          <Link to="/settings"><button style={{padding:'10px 14px',borderRadius:8}}>Settings</button></Link>
        </div>
        <p style={{opacity:0.8,marginTop:12}}>This lightweight home page helps you jump to the most important parts of the app.</p>
      </section>

      <section style={card}>
        <h3 style={{marginTop:0}}>Daily Snapshot</h3>
        <p style={{opacity:0.8}}>You haven't integrated with a live data source yet — this page is intentionally minimal and easy to extend. Use the exported routes to wire these pages into your router.</p>
      </section>
    </main>
  );
}
