import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Signup } from './API';
import toast, { Toaster } from 'react-hot-toast';

function CreateCodex() {

    const [value, setValue] = useState({
        userid: "",
        title: "",
        discription: "",
        filename: "",
        content: ""
    })

    const handleInputs = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {

    }

    return (
        <>
            <div className="w-8/12 rounded-xl mx-auto mt-5 mb-5">
                <input value={value.title} onChange={handleInputs} type="text" className="w-5/12 p-2 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codex Title" />

                <input value={value.discription} onChange={handleInputs} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codex Discription" />
                <div className="mt-5 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 py-2">
                        <ul className="flex flex-wrap text-center">
                            <li className="mr-2 w-60">
                                <input value={value.filename} onChange={handleInputs} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2" placeholder="Filename including extension..." />
                            </li>
                        </ul>
                    </div>

                    <CodeMirror onChange={handleInputs}
                        value={value.content}
                        height="500px"
                    />

                </div>

                <div className="mt-4 flex flex-row-reverse">
                    <button onClick={handleSubmit} type="button" className="mb-2 px-5 py-2.5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm text-center">Create Codex</button>
                </div>

            </div>
        </>

    );
}

export default CreateCodex;