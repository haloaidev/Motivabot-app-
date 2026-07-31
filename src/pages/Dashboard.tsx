import React from "react";

const styles: React.CSSProperties = { padding: 20, color: "#fff", fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', maxWidth: 980, margin: "24px auto" };
const CardStyle: React.CSSProperties = { background: "rgba(8,6,28,0.82)", borderRadius: 12, padding: 18, boxShadow: "0 6px 18px rgba(2,2,8,0.4)" };

export default function Dashboard() {
  return (
    <div style={styles}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Dashboard</h1>
      <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 8 }}>A lightweight overview page providing quick access to goals, habits and recent activity.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 18 }}>
        <div style={CardStyle}>
          <h3 style={{ margin: 0 }}>Today's Focus</h3>
          <p style={{ color: "rgba(255,255,255,0.65)" }}>Review your top goal and small micro-tasks to keep momentum.</p>
          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <button style={{ padding: "8px 12px", borderRadius: 10, border: "none", background: "#F59E0B" }}>Start</button>
            <button style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "#fff" }}>Snooze</button>
          </div>
        </div>
        <div style={CardStyle}>
          <h3 style={{ margin: 0 }}>Streak</h3>
          <p style={{ color: "rgba(255,255,255,0.65)" }}>You're on a 4 day streak. Keep it going!</p>
          <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden", marginTop: 12 }}>
            <div style={{ height: "100%", width: "60%", background: "linear-gradient(90deg,#FBBF24,#D97706)" }} />
          </div>
        </div>

        <div style={CardStyle}>
          <h3 style={{ margin: 0 }}>Recent Goals</h3>
          <ul style={{ color: "rgba(255,255,255,0.85)", marginTop: 10 }}>
            <li>Finish UX writeup</li>
            <li>Run 5km</li>
            <li>Read 20 pages</li>
          </ul>
        </div>

        <div style={CardStyle}>
          <h3 style={{ margin: 0 }}>Quick Links</h3>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <a href="#/goals" style={{ color: "#FBBF24" }}>Goals</a>
            <a href="#/habits" style={{ color: "#FBBF24" }}>Habits</a>
            <a href="#/profile" style={{ color: "#FBBF24" }}>Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}
