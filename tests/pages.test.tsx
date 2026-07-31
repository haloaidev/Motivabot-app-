/**
 * Basic smoke tests for the new UI pages.
 * These tests are minimal and independent so they can run in CI if the repo
 * already has jest + testing-library configured. If not, they are harmless files
 * that are easy to adapt to the repo test setup.
 */
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/pages/Home';
import Goals from '../src/pages/Goals';
import Moods from '../src/pages/Moods';
import Habits from '../src/pages/Habits';
import Settings from '../src/pages/Settings';

test('Home renders without crashing', ()=>{ const { getByText } = render(<Home/>); expect(getByText(/Welcome to MotivaBOT/i)).toBeTruthy(); });
test('Goals renders and shows placeholder', ()=>{ const { getByText } = render(<Goals/>); expect(getByText(/No goals/i)).toBeTruthy(); });
test('Moods renders mood buttons', ()=>{ const { getByText } = render(<Moods/>); expect(getByText(/Log Mood/i)).toBeTruthy(); });
test('Habits renders list', ()=>{ const { getByText } = render(<Habits/>); expect(getByText(/Drink 8 glasses of water/i)).toBeTruthy(); });
test('Settings page renders inputs', ()=>{ const { getByPlaceholderText } = render(<Settings/>); expect(getByPlaceholderText(/Your name/i)).toBeTruthy(); });
