import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

export default function App() {
  return (
    <Router basename="/users-dashboard">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  )
}
