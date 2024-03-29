import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";
import CodeMirror from "@uiw/react-codemirror";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import copy from "copy-to-clipboard";
import {
  faCode,
  faCopy,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { getCodexByid, deleteCodex } from "./API";
import "./cc.css";

function CodexCard(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [codex, setCodex] = useState();
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState();
  const textAreaRef = useRef(null);
  const userLoggedin = JSON.parse(window.localStorage.getItem("user"));
  const editorRef = useRef();
  const [isEditable, setEditable] = useState(false);
  const [editMode, setEditMode] = useState(false);

  async function getCodex() {
    getCodexByid(id)
      .then((res) => {
        console.log(res.data);
        setCodex(res.data);
        // let imgLink = `https://api.dicebear.com/5.x/initials/svg?seed=${res.data.userName}`;
        setCode(res.data.content);
        setLoading(false);
        console.log(editorRef.current);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function deletethisCodex() {
    deleteCodex(id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("Codex deleted successfully");
        setLoading(true);

        setTimeout(() => {
          navigate("/");
        }, 1500);
        
      } else {
        toast.error(res.response.data);
      }
    });
  }

  function enterEditMode() {
    setEditable(true);
    setEditMode(true);
    toast("Enterd Editing mode!!", { icon: "📝" });
  }

  useEffect(() => {
    getCodex();
  }, []);

  function copyToClipboard(e) {
    console.log("Copy clicked!!");
    copy(codex.link);
    toast.success("Copied to clipboard!");
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <InfinitySpin width="200" color="#0652e9" />
        </div>
      ) : (

        <div className="mb-2">
          <div>
            <div
              className="justify-between px-4 py-3 border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-3 sm:mb-0">
                <img
                  className="rounded-full w-10 h-10"
                  src={`https://ui-avatars.com/api/?name=${codex.userName}`}
                />
                <li>
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="ml-1 text-lg font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {codex.userName}
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    /
                    <a
                      href={`/c/${codex.id}`}
                      className="ml-1 text-lg font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {codex.title}
                    </a>
                  </div>
                </li>
              </ol>

              {codex.userName == userLoggedin.name ? (
                <div className="flex items-end space-x-3">
                  <button
                    id="dropdownDefault"
                    className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:focus:ring-gray-700"
                    onClick={enterEditMode}
                  >
                    <FontAwesomeIcon icon={faEdit} className="mx-2" /> Edit
                  </button>
                  <button
                    id="dropdownDefault" onClick={deletethisCodex}
                    className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:focus:ring-gray-700"
                  >
                    <FontAwesomeIcon icon={faTrash} className="mx-2" /> Delete
                  </button>
                </div>) : (<></>)}

            </div>

            <div className="p-3 mx-10 flex justify-between align-middle">
              <div className="align-middle py-2">
                <FontAwesomeIcon className="mx-3 align-middle" icon={faCode} />
                Code
              </div>
              <div className="w-3/12">
                <div className="flex">
                  {/* <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">Link</span> */}

                  <input
                    type="text"
                    id="website-admin"
                    ref={textAreaRef}
                    className="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={codex.link}
                    placeholder={codex.link}
                    disabled
                  />

                  <span
                    className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:border-black hover:text-gray-500"
                    onClick={copyToClipboard}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="mt-5 mb-7 w-7/12 mx-auto bg-white border-[3px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul className="hidden text-sm font-medium text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400">
              <li className="">
                <button
                  id="stats-tab"
                  className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  {codex.filename}
                </button>
              </li>
            </ul>
            <div
              id="fullWidthTabContent"
              className="border-t border-gray-200 dark:border-gray-600"
            >
              <div className="bg-white rounded-lg dark:bg-gray-800">
                {/* <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div> */}
                <CodeMirror
                  className=""
                  value={code}
                  name="content"
                  id="content" editable={isEditable} ref={editorRef}
                />
              </div>
            </div>

            {editMode ? (<a
              type="button"
              href=""
              className="my-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center float-right"
            >
              Save Changes
            </a>) : (<></>)}
          </div>
          {/* <hr className="mb-5" /> */}
        </div>
      )}
    </>
  );
}

export default CodexCard;
