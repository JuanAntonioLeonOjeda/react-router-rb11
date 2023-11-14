import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getAllUsers } from '../../services/userService'

import './AllUsers.css'

function AllUsers() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllUsers()
      setUsers(result)
    }
    fetchData()
  }, [])

  const displayUsers = () => {
    if (users.length !== 0) {
      return users.map(user => {
        return (
          <div className='card' key={user.id}>
            <h3>
              { user.name }
            </h3>
            <p>
              { user.email }
            </p>
            <Link to={`/users/${user.id}`}>
              <button>
                View Profile
              </button>
            </Link>
          </div>
        )
      })
    } else {
      return 'There are no users'
    }
  }

  return (
    <div className='container'>
      { displayUsers() }
    </div>
  )
}

export default AllUsers