import React from "react";

const container: React.CSSProperties = { padding: 20, maxWidth: 820, margin: "24px auto", color: "#fff" };
const card: React.CSSProperties = { background: "rgba(8,6,28,0.85)", padding: 16, borderRadius: 12 };

export default function Goals() {
  return (
    <div style={container}>
      <h1 style={{ margin: 0, fontSize: 26 }}>Goals</h1>
      <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 8 }}>Manage your aspirational and actionable goals. Add milestones, deadlines and track progress.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}>
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Create Goal</h3>
          <input placeholder="New goal title" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#fff" }} />
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            <button style={{ padding: "8px 12px", borderRadius: 8, background: "#F59E0B", border: "none" }}>Add</button>
            <button style={{ padding: "8px 12px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#fff" }}>Cancel</button>
          </div>
        </div>

        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Active Goals</h3>
          <ol style={{ color: "rgba(255,255,255,0.85)" }}>
            <li>Launch landing page</li>
            <li>Build weekly habit routine</li>
            <li>Finish design system</li>
          </ol>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Completed</h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>No completed goals yet. Celebrate your first win!</p>
        </div>
      </div>
    </div>
  );
}
