import React, { useEffect, useRef } from 'react'
import "../Profile/Profile.css";


import { uploads } from '../../utils/config'

//components
import Message from '../../components/Message' // Remova se não usar
import { Link } from 'react-router-dom'        // Remova se não usar
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs' // Remova se não usar
import { useState } from 'react'       // Remova se não usar

//hooks
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserDetails } from '../../slices/userSlice'

//redux

const Profile = () => {
    const {id} = useParams()

    const dispath = useDispatch()

    const {user, loading} = useSelector((state) => state.user)
    const {user: userAuth} = useSelector((state) => state.auth)

    //photo
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    //load user data
    useEffect(() => {
        dispath(getUserDetails(id))
    }, [dispath, id])

    const submitHandle = (e) => {
      e.preventDefault()
    }

    if(loading){
      return <p>Carregando...</p>
    }

    return <div id="profile">
      <div className='profile-header'>
        {user.profileImage &&(
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name}/>
        )}
        <div className='profile-description'>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
        </div>
      </div>
      {id === userAuth._id &&(
        <>
          <div className='new-photo' ref={newPhotoForm}>
              <h3>Compartilhe algum momento seu: </h3>
              <form onSubmit={submitHandle}>
                  <label>
                    <span>Titulo para a foto: </span>
                    <input type="text" placeholder='Insira um titulo'/>
                  </label>
                  <label>
                    <span>Imagem:</span>
                    <input type="file" />
                  </label>
                  <input type="submit" value="Postar" />
              </form>
          </div>
        </>
      )}
    </div>
}

export default Profile