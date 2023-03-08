import React from 'react';/*  */
import CodeMirror from '@uiw/react-codemirror';

function CreateCodex() {


    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);

    
    return (
        <>
            <div class="w-8/12 rounded-xl mx-auto mt-5">
                <input type="text" class="w-5/12 p-2 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codex Title" />

                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codex Discription" />
                <div class="mt-5 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 py-2">
                        <ul class="flex flex-wrap text-center">
                            <li class="mr-2 w-60">
                                <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2" placeholder="Filename including extension..." />
                            </li>
                        </ul>
                    </div>
                    <CodeMirror
                        value="console.log('hello world!');"
                        height="500px"
                        onChange={onChange}
                    />
                </div>

                <div class="mt-4 relative">
                    <button type="button" class="mr-2 mb-2 px-5 py-2.5 absolute right-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm text-center">Create Codex</button>
                </div>

            </div>
        </>

    );
}

export default CreateCodex;