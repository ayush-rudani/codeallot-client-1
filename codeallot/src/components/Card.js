function Card() {
    return (
        <>


            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <ul class="hidden text-sm font-medium text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400">
                    <li class="">
                        <button id="stats-tab" class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">file.cpp</button>
                    </li>

                </ul>
                <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
                    <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" >
                        <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Contributors</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Organizations</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Card;