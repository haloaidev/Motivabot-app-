# UI Pages Added

This commit adds a set of standalone React UI pages and a minimal hash-based router to the project so you can quickly link into pages without changing your main application routing.

Files added:

- `src/pages/Dashboard.tsx` — Overview and quick links
- `src/pages/Goals.tsx` — Goals management UI
- `src/pages/Habits.tsx` — Habit tracker UI
- `src/pages/Profile.tsx` — Profile / account preview
- `src/pages/Settings.tsx` — Data & notification settings
- `src/pages/index.ts` — Exports for the pages
- `src/PageRouter.tsx` — Minimal hash router with navigation bar

How to integrate:

1. Import and mount `PageRouter` in your main app entry (e.g. in `src/App.tsx`):

```tsx
import PageRouter from './PageRouter';

function App(){
  return (
    <div>
      <PageRouter />
    </div>
  );
}

export default App;
```

2. The router uses `#/<route>` hash paths. Example: `#/goals`, `#/habits`, `#/profile`, `#/settings`.

3. Files are intentionally self-contained and use inline styles so they can be dropped in quickly. You can refactor UI primitives to reuse components from the main codebase.

If you'd like, I can also open a pull request, or update an existing `App.tsx` to mount the router directly.
