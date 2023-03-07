// import CodeMirror from '@uiw/react-codemirror';
// // import { javascript } from '@codemirror/lang-javascript';
// import { StreamLanguage } from '@codemirror/language';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

function CodexCard() {

    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);

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
                        <CodeMirror
                            value="console.log('hello world!');"
                            height="200px"
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>


        </>
    );
}

export default CodexCard;