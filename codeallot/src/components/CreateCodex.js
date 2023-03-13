import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { newCodex } from "./API";
import toast, { Toaster } from "react-hot-toast";

function CreateCodex() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    userid: "",
    title: "",
    description: "",
    filename: "",
  });
  const [code, setCode] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(window.localStorage.getItem("user"));

    if (user.id != null) {
      value.userid = user.id;
      newCodex(user.id, value.title, value.description, value.filename, code)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            toast.success("Codex Created");
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            toast.error("Codex Creation Failed");
            toast.error(res.response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please Login to Create Codex");
    }
  };

  const handleInputs = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleCodeChange = (e) => {
    setCode({ code: e });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-8/12 rounded-xl mx-auto mt-5 mb-5">
        <input
          value={value.title}
          onChange={handleInputs}
          name="title"
          type="text"
          className="w-5/12 p-2 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Codex Title"
        />

        <input
          value={value.description}
          onChange={handleInputs}
          name="description"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Codex Description"
        />
        <div className="mt-5 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 py-2">
            <ul className="flex flex-wrap text-center">
              <li className="mr-2 w-60">
                <input
                  value={value.filename}
                  onChange={handleInputs}
                  name="filename"
                  type="text"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2"
                  placeholder="Filename including extension..."
                />
              </li>
            </ul>
          </div>

          <CodeMirror
            onChange={handleCodeChange}
            name="content"
            height="500px"
            id="content"
          />
        </div>

        <div className="mt-4 flex flex-row-reverse">
          <button
            onClick={handleSubmit}
            type="button"
            className="mb-2 px-5 py-2.5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm text-center"
          >
            Create Codex
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateCodex;
