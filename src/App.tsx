/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

export default function App() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <>
      {view === 'landing' && <LandingPage onLogin={() => setView('dashboard')} />}
      {view === 'dashboard' && <Dashboard onLogout={() => setView('landing')} />}
    </>
  );
}
