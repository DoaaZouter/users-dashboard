import { Link } from 'react-router-dom'
import { FiUser, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function UserTable({ users }) {
  return (
    <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg ring-1 ring-gray-200">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              {/* Header - Name */}
              <th className="px-4 py-3 text-left sm:px-6">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FiUser className="w-3 h-3 text-blue-500 sm:w-4 sm:h-4" />
                  <span className="text-xs font-semibold sm:text-sm">Name</span>
                </div>
              </th>
              
              {/* Header - Email */}
              <th className="px-4 py-3 text-left sm:px-6">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FiMail className="w-3 h-3 text-blue-500 sm:w-4 sm:h-4" />
                  <span className="text-xs font-semibold sm:text-sm">Email</span>
                </div>
              </th>
              
              {/* Header - City */}
              <th className="hidden px-4 py-3 text-left sm:px-6 sm:table-cell">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FiMapPin className="w-3 h-3 text-blue-500 sm:w-4 sm:h-4" />
                  <span className="text-xs font-semibold sm:text-sm">City</span>
                </div>
              </th>
              
              {/* Header - Phone */}
              <th className="hidden px-4 py-3 text-left sm:px-6 md:table-cell">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FiPhone className="w-3 h-3 text-blue-500 sm:w-4 sm:h-4" />
                  <span className="text-xs font-semibold sm:text-sm">Phone</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map(user => (
              <tr 
                key={user.id}
                className="transition-colors hover:bg-gray-50"
              >
                {/* Name Cell */}
                <td className="px-4 py-3 sm:px-6">
                  <Link
                    to={`/users/${user.id}`}
                    className="flex items-center gap-2 text-gray-800 transition-colors hover:text-blue-600"
                  >
                    <FiUser className="w-3 h-3 text-gray-400 sm:w-4 sm:h-4" />
                    <span className="text-xs font-medium sm:text-sm">{user.name}</span>
                  </Link>
                </td>
                
                {/* Email Cell */}
                <td className="px-4 py-3 sm:px-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMail className="w-3 h-3 text-gray-400 sm:w-4 sm:h-4" />
                    <span className="text-xs break-all sm:text-sm">{user.email}</span>
                  </div>
                </td>
                
                {/* City Cell - Hidden on mobile */}
                <td className="hidden px-4 py-3 sm:px-6 sm:table-cell">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMapPin className="w-3 h-3 text-gray-400 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{user.address.city}</span>
                  </div>
                </td>
                
                {/* Phone Cell - Hidden on mobile */}
                <td className="hidden px-4 py-3 sm:px-6 md:table-cell">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiPhone className="w-3 h-3 text-gray-400 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{user.phone}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}