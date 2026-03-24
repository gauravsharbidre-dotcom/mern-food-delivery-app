import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Discover delicious meals near you. Order fresh food from your favorite
              restaurants and get it delivered quickly to your doorstep.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header