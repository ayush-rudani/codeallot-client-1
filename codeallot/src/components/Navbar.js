import React from 'react';
import { useEffect, useState } from "react";


export default function NavBar() {

    const [isLoggedin, setIsLoggedin] = useState(false);

    async function getUserData() {
        const user = JSON.parse(window.localStorage.getItem('user'));
        if (user != null) {
            setIsLoggedin(true);
        }
    }

    useEffect(() => {
        getUserData();
    });

    return (

        <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">

                <div className="w-1/5">
                    <a href="/" className="flex items-center">
                        <img src="https://user-images.githubusercontent.com/78534043/223768806-c3083ef9-8d6b-4f55-b859-1a62d263f0da.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CodeAllot</span>
                    </a>
                </div>

                <div className="w-4/5">
                    <div className="md:w-auto container mx-auto flex justify-between items-center">

                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Explore All Codex</a>
                            </li>
                            <li>
                                <a href="/yourcodex" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Your Codex</a>
                            </li>
                        </ul>



                        <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {!isLoggedin ? (
                                <>
                                    <li>
                                        <a type="button" href="/login" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Sign in</a>
                                    </li>

                                    <li>
                                        <a href="/register" className="inline-flex items-center justify-center p-0.5 mr-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                            <span className="px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Sign up</span>
                                        </a>
                                    </li>
                                </>
                            ) :
                                (
                                    <>
                                        <li>
                                            <a type="button" href="/login" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Logout</a>
                                        </li>
                                    </>
                                )}


                            {/* <li>
                                <a type="button" href="/login" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Sign in</a>
                            </li>

                            <li>
                                <a href="/register" className="inline-flex items-center justify-center p-0.5 mr-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Sign up</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}