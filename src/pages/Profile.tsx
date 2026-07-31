import React from "react";

const style: React.CSSProperties = { padding: 20, maxWidth: 820, margin: "24px auto", color: "#fff" };
const card: React.CSSProperties = { background: "rgba(8,6,28,0.85)", padding: 16, borderRadius: 12 };

export default function Profile() {
  return (
    <div style={style}>
      <h1 style={{ margin: 0, fontSize: 26 }}>Profile</h1>
      <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 8 }}>Your personal information and preferences. Tailor MotivaBOT to your rhythm.</p>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <div style={card}>
          <h3 style={{ margin: 0 }}>Account</h3>
          <div style={{ marginTop: 8 }}>
            <div style={{ color: "rgba(255,255,255,0.85)" }}><strong>Name:</strong> <span style={{ marginLeft: 8 }}>Your Name</span></div>
            <div style={{ color: "rgba(255,255,255,0.65)", marginTop: 6 }}><strong>Email:</strong> you@example.com</div>
          </div>
        </div>

        <div style={card}>
          <h3 style={{ margin: 0 }}>Preferences</h3>
          <div style={{ marginTop: 8, color: "rgba(255,255,255,0.85)" }}>
            <div>Daily reminder: <strong>08:00 AM</strong></div>
            <div style={{ marginTop: 6 }}>Preferred focus time: <strong>Morning</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}
