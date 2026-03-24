import React, { useState } from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets';

const Navbar = ({search,setSearch}) => {

  const [showSearch,setShowSearch] = useState(false)

  return (
    <div className='navbar'>

        <img className='logo' src={assets.logo} alt="" />

        <div className="nav-right">

            {showSearch && (
                <input
                  type="text"
                  placeholder="Search food..."
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                  className="search-input"
                />
            )}

            <img 
              src={assets.search_icon} 
              alt="" 
              onClick={()=>setShowSearch(!showSearch)}
              className="search-icon"
            />

            <img src={assets.profile_image} alt="" className="profile" />

        </div>

    </div>
  )
}

export default Navbar