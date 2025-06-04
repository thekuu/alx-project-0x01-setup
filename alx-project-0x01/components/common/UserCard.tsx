import { UserProps } from '@/interfaces'

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-blue-900 mb-1">{user.name}</h2>
      <p className="text-gray-600 mb-2">@{user.username}</p>

      <div className="mb-2">
        <p className="text-sm text-gray-800">
          📧 {user.email} | 📞 {user.phone}
        </p>
        <p className="text-sm text-gray-600">🌐 {user.website}</p>
      </div>

      <div className="text-sm text-gray-700 mb-2">
        <p>
          🏠 {user.address.suite}, {user.address.street}, {user.address.city} ({user.address.zipcode})
        </p>
        <p>
          📍 Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
        </p>
      </div>

      <div className="text-sm mt-4 border-t pt-2">
        <p className="font-semibold">🏢 {user.company.name}</p>
        <p className="italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  )
}

export default UserCard