import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='nabvar'>
        <nav className='p-4 flex justify-between'>
          <div className="logo">App</div>
            <ul className='flex'>
                <Link className='mx-2' href="myhome">Home</Link>
                <Link className='mx-2' href="#">About</Link>
                <Link className='mx-2' href="#">Profession</Link>
                <Link className='mx-2' href="#">Services</Link>
                <Link className='mx-2' href="#">Contact</Link>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
