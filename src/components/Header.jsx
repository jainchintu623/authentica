// import React from 'react'

const Header = () => {
  return (
    <header className="flex w-full bg-red-300 gap-28 py-4" >
        <h1 className="px-3">Logo</h1>

        <nav className="flex px-20 w-full justify-between">
            <ul className="flex gap-10">
                <li>Home</li>
                <li>Feature</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <ul className="hidden md:flex gap-10" >
                <li>Login</li>
                <li>Sign up</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
