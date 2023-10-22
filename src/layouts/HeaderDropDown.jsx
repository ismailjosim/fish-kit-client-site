import React, { useEffect, useRef, useState } from 'react'
import { GiFishingPole } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import '../styles/index.css'


const HeaderDropDown = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const toggleDropdown = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    const closeDropdown = () => {
        setIsDropDownOpen(false)
    }

    // Add event listener to close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const classes =
        'py-2 px-3 text-sm hover:text-white inline-block hover:bg-primary bg-transparent border-transparent w-full transition-all duration-300 ease-in-out'

    return (
        <div className='relative  lg:inline-block hidden' ref={ dropdownRef }>
            <button
                onClick={ toggleDropdown } className='relative z-10 flex items-center btn btn-ghost hover:bg-transparent'>
                <button
                    type='button'
                    className='flex items-center focus:outline-none'
                    aria-label='toggle profile dropdown'
                >
                    <div className='w-12 h-12 overflow-hidden border-2 border-primary rounded-full'>
                        <img
                            src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                            className='object-cover w-full h-full'
                            alt='avatar'
                        />
                    </div>
                </button>
                <span className='capitalize'>Profile</span>
                <GiFishingPole
                    size={ 20 }
                    className={ ` transition-all duration-300  ${ isDropDownOpen ? 'rotate-45' : 'rotate-0'
                        }` }
                />
            </button>

            {/* Dropdown menu */ }
            { isDropDownOpen && (
                <div className='absolute right-0 z-20 w-56 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl'>
                    <div
                        onClick={ closeDropdown }
                    >
                        <a
                            href='#'
                            className='flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 select-none'
                        >
                            <img
                                className='flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9'
                                src='https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200'
                                alt='jane avatar'
                            />
                            <div className='mx-1'>
                                <h1 className='text-sm font-semibold text-gray-700'>ADMIN</h1>
                                <p className='text-sm text-gray-500'>admin@gmail.com</p>
                            </div>
                        </a>

                        <hr className='border-gray-200' />

                        <Link className={ classes } to={ '/profile' }>
                            View Profile
                        </Link>
                        <Link className={ classes } to={ '/profile' }>
                            Settings
                        </Link>
                        <Link className={ classes } to={ '/profile' }>
                            Company Profile
                        </Link>
                        <Link className={ classes } to={ '/profile' }>
                            Keyboard Shortcuts
                        </Link>
                        <hr className='border-gray-200' />
                        <Link className={ classes } to={ '/profile' }>
                            Company Profile
                        </Link><Link className={ classes } to={ '/profile' }>
                            Team
                        </Link><Link className={ classes } to={ '/profile' }>
                            Invite Colleagues
                        </Link><Link className={ classes } to={ '/profile' }>
                            About
                        </Link>

                        <hr className='border-gray-200 mb-2' />
                        <button className='btn btn-md w-full rounded-none bg-primary text-white'>
                            Sign Out
                        </button>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default HeaderDropDown
