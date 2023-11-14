import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneUser } from "../../services/userService"

const OneUser = () => {
  const { userId } = useParams()

  const [ user, setUser ] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOneUser(userId)
      setUser(result)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h3>
        {`Name: ${ user.name }` }
      </h3>
      <p>
        { `Phone: ${ user.phone }` }
      </p>
      <p>
        { `Website: ${ user.website }` }
      </p>
    </div>
  )
}

export default OneUser
