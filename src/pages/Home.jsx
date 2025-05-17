import { useState, useEffect } from 'react'
import axios from 'axios'
import UserTable from '../components/UserTable'
import SkeletonLoader from '../components/SkeletonLoader'

export default function Home() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCity, setFilterCity] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCity = filterCity ? user.address.city === filterCity : true
    return matchesSearch && matchesCity
  })

  if (error) return <div className="p-4 text-red-500">Error: {error}</div>
  
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-primary">Users Dashboard</h1>
      
      <div className="flex flex-col gap-4 mb-6 md:flex-row">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="flex-grow p-2 border rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          className="p-2 border rounded-lg"
          onChange={(e) => setFilterCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {[...new Set(users.map(user => user.address.city))].map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <UserTable users={filteredUsers} />
      )}
    </div>
  )
}


