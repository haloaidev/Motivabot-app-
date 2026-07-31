import React from "react";

const style: React.CSSProperties = { padding: 20, maxWidth: 820, margin: "24px auto", color: "#fff" };
const card: React.CSSProperties = { background: "rgba(8,6,28,0.85)", padding: 16, borderRadius: 12 };

export default function Settings() {
  return (
    <div style={style}>
      <h1 style={{ margin: 0, fontSize: 26 }}>Settings</h1>
      <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 8 }}>Application preferences, export/import data and badges.</p>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <div style={card}>
          <h3 style={{ margin: 0 }}>Data</h3>
          <div style={{ marginTop: 8 }}>
            <button style={{ padding: "8px 12px", borderRadius: 8, background: "#F59E0B", border: "none" }}>Export Data</button>
            <button style={{ padding: "8px 12px", borderRadius: 8, marginLeft: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#fff" }}>Import</button>
          </div>
        </div>

        <div style={card}>
          <h3 style={{ margin: 0 }}>Notifications</h3>
          <div style={{ marginTop: 8, color: "rgba(255,255,255,0.85)" }}>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="checkbox" defaultChecked /> Email reminders
            </label>
            <label style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
              <input type="checkbox" defaultChecked /> Push notifications
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
