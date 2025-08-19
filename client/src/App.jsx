import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)


  const getUser = async () => {
    setLoading(true)
    const result = await axios.get(`${import.meta.env.VITE_API_URL}/user/getUser`);
    setUser(result.data.user)
    setLoading(false)
  }

  return (
    <div className='text-red-500 w-full h-screen flex flex-col justify-center items-center text-3xl'>
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
      {!user && <button onClick={getUser} className='bg-blue-500 px-5 py-1 rounded-md text-xl text-white cursor-pointer'>
        {loading ? <span>fetching</span> : "Fetch Data"}
      </button>}
    </div>
  )
}

export default App