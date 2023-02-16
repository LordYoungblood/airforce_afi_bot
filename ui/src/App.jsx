import './App.css'
import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'

export const MainContext = React.createContext()

function App () {
  const [API, setAPI] = useState('http://localhost:8080')
  const [userInfo, setUserInfo] = useState('')

  useEffect(() => {
    const url = `${API}/users`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('This is data ', data)
        setUserInfo(data[0].username)
      })
  }, [])

  const passContext = {
    API,
    userInfo
  }

  return (
    <>
      <MainContext.Provider value={passContext}>
        <Router>
          {/* <NavBar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  )
}

export default App
