import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Home from './pages/home/Home'
import Game from './pages/game/Game'
import useGameContext from './contexts/useGameContext'

function App() {

  const { gameData } = useGameContext();

  return (
    <>
      <div className='w-full h-screen backgound'>
        {gameData ? (
          <Navigate to="/game" />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        )}
      </div>
      <Toaster />
    </>
  )
}

export default App
