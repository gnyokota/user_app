import { createUser } from './users/page'

type Data = {
  user: {}
  users: []
  numberOfUsers: number
}
export default function Home() {
  const [data, setData] = useState<Data | null>(null)

  const sendCreatedUser = async () => {
    try {
      const response = await createUser(data.user)
      console.log('User created successfully:', await response)
      setData((prevData: Data | null) => {
        if (!prevData) return null
        return {
          ...prevData,
          numberOfUsers: prevData.numberOfUsers + 1,
        }
      })
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return <div>{}</div>
}
