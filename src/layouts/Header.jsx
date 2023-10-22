import { useState } from 'react'
import logo from '../assets/logo1.png'
import { LuFish, LuFishOff } from 'react-icons/lu'
import { FiShuffle } from 'react-icons/fi'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='relative bg-white shadow'>
            <div className='container px-6 py-4 mx-auto'>
                <div className='lg:flex lg:items-center lg:justify-between'>
                    <div className='flex items-center justify-between'>
                        <a href='#'>
                            <img className='w-auto h-7 sm:h-14' src={ logo } alt='' />
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
                        <div className='flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8'>
                            <a
                                href='#'
                                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100'
                            >
                                Join Slack
                            </a>
                            <a
                                href='#'
                                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100'
                            >
                                Browse Topics
                            </a>
                            <a
                                href='#'
                                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100'
                            >
                                Random Item
                            </a>
                            <a
                                href='#'
                                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover-bg-gray-100'
                            >
                                Experts
                            </a>
                        </div>

                        <div className='flex items-center mt-4 lg:mt-0'>

                            <button
                                type='button'
                                className='flex items-center focus:outline-none'
                                aria-label='toggle profile dropdown'
                            >
                                <div className='w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full'>
                                    <img
                                        src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                                        className='object-cover w-full h-full'
                                        alt='avatar'
                                    />
                                </div>

                                <h3 className='mx-2 text-gray-700 lg:hidden'>Khatab wedaa</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
