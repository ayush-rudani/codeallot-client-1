import CCard from "./CCard";
import React from "react";
import { useEffect, useState } from "react";
import { getCodexByUserid } from "./API";
import toast, { Toaster } from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";

function YourCodex() {
  const [codex, setCodex] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(window.localStorage.getItem("user"));

  async function fetchCodexByUserid() {
    console.log(user);
    if (user.id != null) {
      getCodexByUserid(user.id)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setCodex(res.data);
            setLoading(false);
          } else {
            toast.error(res.response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please Login to see Codex");
    }
  }

  useEffect(() => {
    fetchCodexByUserid();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex">
        <div className="w-3/12">
          <div className="w-full max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-10 space-y-3">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://api.dicebear.com/5.x/initials/svg?seed=A"
                alt=""
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.name}
              </h5>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.status}
              </span>

              {/* <p className="text-lg font-medium text-gray-900 dark:text-white">
                Status
              </p> */}

              <div className="container block text-center">
                <span className="font-medium text-gray-600">GitHub: </span>
                <a
                  href="#"
                  className=" text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {user.github}
                </a>
              </div>

              <div className="container block text-center">
                <span className="font-medium text-gray-600">LinkedIn: </span>
                <a
                  href="#"
                  className=" text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {user.linkedin}
                </a>
              </div>

              <div className="container block text-center">
                <span className="font-bold">Codex Count: </span>
                <span className="font-mono text-neutral-700">0</span>
              </div>

              {/* <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                            </div> */}
            </div>
          </div>
        </div>

        <div className="py-5 w-9/12 px-14 space-y-3">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <InfinitySpin width="200" color="#0652e9" />
            </div>
          ) : (
            codex.map((item) => <CCard key={item.id} codex={item} />)
          )}
        </div>
      </div>
    </>
  );
}

export default YourCodex;
