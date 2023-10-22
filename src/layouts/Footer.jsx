import { BsArrowRight } from 'react-icons/bs'
import logo from '../assets/logo1.png'

const Footer = () => {
    return (
        <footer className='bg-white'>
            <div className='container px-6 py-12 mx-auto'>
                <div className='md:flex md:-mx-3 md:items-center md:justify-between'>
                    <h1 className='text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl'>
                        Subscribe our newsletter to get updates.
                    </h1>

                    <div className='mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto'>
                        <button className='inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'>
                            <span>Sign Up Now</span>
                            <BsArrowRight className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <hr className='my-6 border-gray-200 md:my-10' />

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='font-semibold text-gray-800'>Quick button</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500'
                            >
                                Home
                            </button>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500'
                            >
                                Who We Are
                            </button>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500'
                            >
                                Our Philosophy
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold text-gray-800'>Industries</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500'
                            >
                                Retail & E-Commerce
                            </button>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover-text-blue-500'
                            >
                                Information Technology
                            </button>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover-text-blue-500'
                            >
                                Finance & Insurance
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold text-gray-800'>Services</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover-text-blue-500'
                            >
                                Translation
                            </button>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover-text-blue-500'
                            >
                                Proofreading & Editing
                            </button>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover-text-blue-500'
                            >
                                Content Creation
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold text-gray-800'>Contact Us</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <button

                                className='text-gray-600 transition-colors duration-300 hover:underline hover-text-blue-500'
                            >
                                +880 768 473 4978
                            </button>
                            <button
                                className='text-gray-600 transition-colors duration-300 hover:underline hover-text-blue-500'
                            >
                                info@merakiui.com
                            </button>
                        </div>
                    </div>
                </div>

                <hr className='my-6 border-gray-200 md:my-10' />

                <div className='flex flex-col items-center justify-between sm:flex-row'>
                    <button>
                        <img
                            className='w-28'
                            src={ logo }
                            alt=''
                        />
                    </button>

                    <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                        © Copyright 2021. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
