import React from 'react'

const Navbar = () => {
  return (
          <nav className="w-full bg-gray-950 py-5 shadow-md sticky  z-10">
        <h1 className="text-center text-4xl font-bold text-white tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
          Ghost<span className="text-purple-500">-</span>Resume
        </h1>
      </nav>
  )
}

export default Navbar