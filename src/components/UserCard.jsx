import { FiUser, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function UserCard({ user }) {
  return (
    <div className="p-6 transition-all duration-300 bg-gray-800 shadow-xl group rounded-xl hover:bg-gray-700 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500">
          <span className="font-bold text-white">{user.name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{user.name}</h3>
          <p className="text-sm text-cyan-400">{user.company.name}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <FiMail className="flex-shrink-0 text-cyan-400" />
          <span className="text-sm text-gray-300">{user.email}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <FiMapPin className="flex-shrink-0 text-cyan-400" />
          <span className="text-sm text-gray-300">{user.address.city}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <FiPhone className="flex-shrink-0 text-cyan-400" />
          <span className="text-sm text-gray-300">{user.phone}</span>
        </div>
      </div>

      <button className="flex items-center justify-center w-full gap-2 py-2 mt-4 font-medium text-white transition-colors rounded-lg bg-cyan-600 hover:bg-cyan-500">
        <FiUser className="w-4 h-4" />
        View Profile
      </button>
    </div>
  )
}