import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../App'

export const Home = () => {
  const navigate = useNavigate()
  const { API, userInfo } = useContext(MainContext)

  return (
    <>
      <>This is userInfo: {userInfo}</>
      <>This is API: {API}</>
    </>
  )
}
