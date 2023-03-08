import CCard from "./CCard";

function YourCodex() {
    return (
        <>
            <div class="flex">
                <div class="w-3/12">
                    <div class="w-full max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-end px-4 pt-4">
                        </div>
                        <div class="flex flex-col items-center pb-10 space-y-3">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://api.dicebear.com/5.x/initials/svg?seed=A" alt="" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name</h5>

                            <span class="text-sm text-gray-500 dark:text-gray-400">username</span>

                            <p class="text-lg font-medium text-gray-900 dark:text-white">Status</p>

                            <div class="container block text-center">
                                <span class="font-medium text-gray-600">GitHub: </span>
                                <a href="#" class=" text-blue-600 dark:text-blue-500 hover:underline">link</a>
                            </div>

                            <div class="container block text-center">
                                <span class="font-medium text-gray-600">LinkedIn: </span>
                                <a href="#" class=" text-blue-600 dark:text-blue-500 hover:underline">link</a>
                            </div>

                            <div class="container block text-center">
                                <span class="font-bold">Codex Count: </span>
                                <span class="font-mono text-neutral-700">0</span>
                            </div>


                            {/* <div class="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                            </div> */}



                        </div>
                    </div>

                </div>

                <div class="py-5 w-9/12 px-14 space-y-3">
                    <CCard />
                    <CCard />
                </div>

            </div>
        </>
    );
}

export default YourCodex;