import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";

const markdown = `
  \`\`\`cpp
  #include <iostream>
  using namespace std;
  
  int main() {

    cout << "Hello World!";

    return 0;
  }
  \`\`\`
`;

function CodexCard() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="w-full bg-white border-[3px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <ul className="hidden text-sm font-medium text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400">
                    <li className="">
                        <button id="stats-tab" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">file.cpp</button>
                    </li>

                </ul>
                <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                    <div className="p-1 bg-white rounded-lg dark:bg-gray-800" >
                        <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default CodexCard;