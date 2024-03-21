import React from 'react'

function Header() {
    return (
        <div>

            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href='/'>
                    <h1 className="text-2xl font-bold">User Profile</h1>
                    </a>
                    <nav>
                        <ul className="flex">
                            <li className="mr-6"><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li className="mr-6"><a href="#" className="hover:text-gray-300">About</a></li>
                            <li className="mr-6"><a href="#" className="hover:text-gray-300">Services</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
