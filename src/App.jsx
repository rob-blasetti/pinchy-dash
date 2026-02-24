import { useState } from 'react'
import './App.css'

const TABS = {
  home: 'Home',
  stats: 'Stats',
  settings: 'Settings',
}

function HomePage({ count, setCount }) {
  return (
    <>
      <h1>Pinchy Dash</h1>
      <div className="card">
        {count === 0 && (
          <p className="install-note">
            📱 This app is PWA-ready. On mobile, use your browser menu and tap
            "Add to Home Screen" to install it.
          </p>
        )}
        <button onClick={() => setCount((value) => value + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

function StatsPage({ count }) {
  const doubled = count * 2
  const nextMilestone = Math.ceil((count + 1) / 10) * 10

  return (
    <>
      <h1>Stats</h1>
      <div className="card stack">
        <p><strong>Current count:</strong> {count}</p>
        <p><strong>Doubled:</strong> {doubled}</p>
        <p><strong>Next milestone:</strong> {nextMilestone}</p>
      </div>
    </>
  )
}

function SettingsPage({ setCount }) {
  return (
    <>
      <h1>Settings</h1>
      <div className="card stack">
        <p>Quick actions:</p>
        <button onClick={() => setCount(0)}>Reset counter</button>
      </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="app-shell">
      <main className="page-content">
        {activeTab === 'home' && <HomePage count={count} setCount={setCount} />}
        {activeTab === 'stats' && <StatsPage count={count} />}
        {activeTab === 'settings' && <SettingsPage setCount={setCount} />}
      </main>

      <nav className="bottom-nav" aria-label="Bottom navigation">
        {Object.entries(TABS).map(([key, label]) => (
          <button
            key={key}
            className={`nav-item ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
