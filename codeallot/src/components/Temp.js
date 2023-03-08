function Temp() {
    return (
        <>
            <nav class="bg-gray-800 p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <ul class="flex">
                        <li class="mr-6">
                            <a class="text-white hover:text-gray-400" href="#">Home</a>
                        </li>
                        <li class="mr-6">
                            <a class="text-white hover:text-gray-400" href="#">About</a>
                        </li>
                        <li>
                            <a class="text-white hover:text-gray-400" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul class="flex">
                        <li class="mr-6">
                            <a class="text-white hover:text-gray-400" href="#">Login</a>
                        </li>
                        <li>
                            <a class="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-200" href="#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    );
}

export default Temp;