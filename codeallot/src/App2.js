function App2() {
    return (
        <>
            <header>
                <nav className="flex items-center justify-between p-2 px-6 container mx-auto">

                    {/* <!-- Menu items --> */}
                    <div class="text-lg text-gray-600 hidden lg:flex">
                        <a href="#" class="block mt-3 lg:inline-block text-teal-600 lg:mt-0 mr-10">
                            Home
                        </a>
                        <a href="#" class="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
                            Services
                        </a>
                        <a href="#" class="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
                            Portfolio
                        </a>
                        <a href="#" class="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10">
                            Company
                        </a>
                        <a href="#" class="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0">
                            Contact
                        </a>
                    </div>

                    {/* <!-- CTA and Hamburger icon --> */}
                    <div class="flex items-center">
                        <div class="mr-5 lg:mr-0">
                            <button class="py-2 px-6 rounded-md text-gray-600 hover:text-gray-700 text-lg">Sign in</button>
                            <button class="py-2 px-6 bg-teal-500 hover:bg-teal-600 rounded-md text-white text-lg">Sign up</button>
                        </div>
                        <div class="block lg:hidden">
                            <button
                                class="flex items-center px-4 py-3 border rounded text-teal-500 border-teal-500 focus:outline-none">
                                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </nav>
            </header>

        </>
    );
}

export default App2;