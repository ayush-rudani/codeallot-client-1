function App3() {
    return (
        <>

            <nav class="bg-purple-800 text-white flex justify-between">
                <img src="https://picsum.photos/id/200/200" class="w-10 rounded-xl" alt="" />
                <ul class="px-10 py-4 flex space-x-3 justify-end">
                    <li class="mx-2 cursor-pointer">Home</li>
                    <li class="mx-2 cursor-pointer">About</li>
                    <li class="mx-2 cursor-pointer">Contact</li>

                </ul>
            </nav>

            <main class="bg-fuchsia-100 flex justify-around">
                <section class="main  py-40 pl-9">
                    <div class="text-6xl">
                        The best phone in the world
                    </div>
                    <p class="py-3 w-1/3"> lorem ipsum dolor sit amet consectetur adipisicing elit. laborum, quod. lo23rem ipsum dolor sit amet consectetur adipisicing elit. laborum, quod.
                    </p>
                    <div class="buttons">
                        <buttons class="bg-purple-900 px-3 py-2 text-white rounded-2xl mx-2">Buy Now</buttons>
                        <buttons class="bg-purple-900 px-3 py-2 text-white rounded-2xl mx-2">Contact Us</buttons>
                    </div>
                </section>

                <div class="flex items-center">
                    <img src="https://picsum.photos/seed/picsum/300/200" class="" alt="" />
                </div>
            </main>

        </>
    );
}

export default App3;