import React, { useEffect, useState } from "react";
import * as Pages from "./pages";

// Minimal hash-based router so pages can be added without touching an existing router.
export default function PageRouter() {
  const [route, setRoute] = useState<string>(window.location.hash.replace('#/','') || 'dashboard');
  useEffect(()=>{
    const onHash = ()=> setRoute(window.location.hash.replace('#/','') || 'dashboard');
    window.addEventListener('hashchange', onHash);
    return ()=> window.removeEventListener('hashchange', onHash);
  },[]);

  const navStyle: React.CSSProperties = { position: 'fixed', left: 18, top: 18, display: 'flex', gap: 8, zIndex: 40 };
  const linkStyle = (active: boolean): React.CSSProperties => ({ padding: '10px 12px', borderRadius: 10, fontSize: 13, background: active? 'linear-gradient(90deg,#FBBF24,#F59E0B)' : 'rgba(255,255,255,0.03)', color: active? '#000' : '#fff', fontWeight: 700, textDecoration: 'none' });

  const render = () => {
    switch(route) {
      case 'goals': return <Pages.Goals />;
      case 'habits': return <Pages.Habits />;
      case 'profile': return <Pages.Profile />;
      case 'settings': return <Pages.Settings />;
      default: return <Pages.Dashboard />;
    }
  };

  return (
    <div>
      <div style={navStyle}>
        <a href="#/dashboard" style={linkStyle(route==='dashboard')}>Dashboard</a>
        <a href="#/goals" style={linkStyle(route==='goals')}>Goals</a>
        <a href="#/habits" style={linkStyle(route==='habits')}>Habits</a>
        <a href="#/profile" style={linkStyle(route==='profile')}>Profile</a>
        <a href="#/settings" style={linkStyle(route==='settings')}>Settings</a>
      </div>
      <div style={{ paddingTop: 72 }}>{render()}</div>
    </div>
  );
}
