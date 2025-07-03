import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className='container'>

        <div className="logo">
          <img src="/Images/brand_logo.png" alt="Brand_logo" />
        </div>

        <ul>
          <li href = "#">Home</li>
          <li href = "#">Menu</li>
          <li href = "#">About</li>
          <li href = "#">Contact US</li>
        </ul>

        <button>Login</button>

      </nav>
    </div>
  )
}

export default Navigation
