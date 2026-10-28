import axios from 'axios'

type Data = {
  user: {}
  users: []
  numberOfUsers: number
}

const fetchUsers = async () => {
  const { data } = await axios.get<Data>('http://localhost:8080/api/users')
  return data
}

export default function Home() {
  const { data, error, isLoading } = useQuery<Data>(['users'], fetchUsers)

  if (isLoading) return <p>Loading...</p>
  if (error) {
    console.error(error)
    return <p>Error fetching users</p>
  }

  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
