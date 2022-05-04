import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth/helpers/auth'


const Profile = () => {
  const [art, setArt] = useState([])
 

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile/arts', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setArt(data) 
    }
    getData()
  }, [])

 
  return (
    <>
      <h1 className="art-title text-monospace">.</h1>
      <div className="background-color">
        <div className="form-container">
          
          <h1>no display yet</h1>
          
          {art.map(myArt => {
            return <div key={myArt._id}>
              <p className="animate__animated animate__flipInX text-monospace" ><span className="fw-bold text-decoration-underline">{art.name}</span></p>
              <p className="text-monospace text-start">artist: <span className="fw-bold text-decoration-underline">{art.artist}</span></p>
              <p className="text-monospace text-start">Age: <span className="fw-bold text-decoration-underline">{art.age}</span> years old</p>
              <p className="text-monospace text-start">category: <span className="fw-bold text-decoration-underline">{art.category}</span></p>
            </div>
          })}
      
        </div>
      </div>
    </>
  )
}

export default Profile