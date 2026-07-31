import React from "react";

const wrap: React.CSSProperties = { padding: 20, color: "#fff", maxWidth: 820, margin: "24px auto" };
const card: React.CSSProperties = { background: "rgba(8,6,28,0.85)", padding: 14, borderRadius: 12 };

export default function Habits() {
  const habits = [
    { id: 1, title: "Drink 8 glasses", done: false },
    { id: 2, title: "Exercise 30 min", done: true },
    { id: 3, title: "Meditate 10 min", done: false },
  ];
  return (
    <div style={wrap}>
      <h1 style={{ margin: 0, fontSize: 26 }}>Habits</h1>
      <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 8 }}>Track daily micro-habits and streaks to build momentum.</p>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <div style={card}>
          <h3 style={{ margin: 0 }}>Today's Habits</h3>
          <ul style={{ marginTop: 10 }}>
            {habits.map(h=> (
              <li key={h.id} style={{ display: "flex", alignItems: "center", gap: 10, color: h.done?"#A3F59E":"#fff" }}>
                <input type="checkbox" checked={h.done} readOnly />
                <span>{h.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={card}>
          <h3 style={{ margin: 0 }}>Streak Insights</h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>Maintain a 7-day streak to form lasting habits. Small wins compound over time.</p>
        </div>
      </div>
    </div>
  );
}
