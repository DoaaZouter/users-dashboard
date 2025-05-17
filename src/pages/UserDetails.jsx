import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [id])

  if (loading) return <div className="p-4">Loading...</div>

  return (
    <div className="container p-4 mx-auto">
      <Link to="/" className="inline-block mb-4 text-primary hover:underline">
        &larr; Back to Dashboard
      </Link>
      
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold">{user.name}</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p><span className="font-semibold">Address:</span> {user.address.street}, {user.address.city}</p>
          <p><span className="font-semibold">Company:</span> {user.company.name}</p>
          <p><span className="font-semibold">Website:</span> {user.website}</p>
        </div>
      </div>
    </div>
  )
}