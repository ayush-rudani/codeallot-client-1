
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function CCard(props) {
    return (
        <>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 py-2">
                    <ul className="flex flex-wrap font-medium text-center text-gray-500">
                        <li className="mr-2">
                            <button type="button" className="inline-block px-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 text-base dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">username: {props.codex.createdBy}</button>
                        </li>
                    </ul>
                    <p className="text-sm text-gray-500 dark:text-gray-400 px-4">Last updated on {props.codex.createdAt.slice(0, 10)}</p>
                </div>

                <div id="Content">
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel">
                        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{props.codex.title}</h2>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">{props.codex.description}</p>
                        <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                            See Coddex
                            {/* <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> */}
                            <FontAwesomeIcon className='w-4 h-4 ml-1' icon={faChevronRight} />
                        </a>
                    </div>


                </div>
            </div>


        </>
    )
}


export default CCard;