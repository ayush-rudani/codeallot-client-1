import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

function CreateCodex() {


    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);


    return (
        <>
            <div class="w-8/12 rounded-xl mx-auto mt-3">
                <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codex Discription" />

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
                            height="550px"
                            onChange={onChange}
                        />

                </div>


            </div>
        </>

    );
}

export default CreateCodex;