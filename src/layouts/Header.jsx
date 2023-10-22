import { useState } from 'react'
import logo from '../assets/logo1.png'
import { LuFish, LuFishOff } from 'react-icons/lu'

import { Link, NavLink } from 'react-router-dom'
import HeaderDropDown from './HeaderDropDown'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const classes =
        'btn hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'

    const menuItems = (
        <>
            <li>
                <NavLink className={ classes } to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={ classes } to='/about'>
                    about
                </NavLink>
            </li>
        </>
    )

    return (
        <nav className='relative bg-white shadow'>
            <div className='w-11/12 mx-auto py-2'>
                <div className='lg:flex lg:items-center lg:justify-between'>
                    <div className='flex items-center justify-between'>
                        <a href='#'>
                            <img className='w-auto h-10' src={ logo } alt='' />
                        </a>
                        {/* Mobile menu button */ }
                        <div className='flex lg:hidden'>
                            <button
                                onClick={ toggleMenu }
                                type='button'
                                className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                                aria-label='toggle menu'
                            >
                                { !isOpen ? (
                                    <LuFish className='w-8 h-8 text-primary' />
                                ) : (
                                    <LuFishOff className='w-8 h-8 text-primary' />
                                ) }
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */ }
                    <div
                        className={ `absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white ${ isOpen
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-full'
                            } lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center` }
                    >
                        <div className='flex flex-col lg:flex-row lg:items-center lg:mx-2 list-none gap-5'>
                            { menuItems }
                        </div>
                        <ul className='flex lg:flex-row md:flex-row flex-col lg:items-center mt-4 lg:mt-0 '>
                            <HeaderDropDown />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
