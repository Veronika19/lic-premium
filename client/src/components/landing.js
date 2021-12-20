import React from 'react';

export default function App() {
  return (
    <>
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="bg-white mt-10 flex flex-col items-start justify-between pt-4 pb-4 sm:pt-8 px-5 sm:px-10 shadow rounded-t">
              <div className="flex items-center mb-4 xl:mb-0">
                <h2 className="text-gray-800 text-2xl ">User Experience Revamp and Optimization</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-6 mx-auto px-5 sm:px-10">
        <div className="flex flex-wrap">
          <div className="container mx-auto">
            <div className="w-full">
              <div className="container mx-auto bg-white py-5 flex items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
                <h2 className="text-gray-800 text-2xl ">Invoice Report</h2>
              </div>

              <div className="mx-auto mb-10 bg-white shadow">
                <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                  <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center">
                    <div className="flex items-center lg:border-l lg:border-r border-gray-300 py-3 lg:py-0 lg:px-6">
                      <p className="text-base text-gray-600" id="view-para">
                        Viewing 1 - 20 of 50
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer ml-2 text-gray-600 icon icon-tabler icon-tabler-chevron-left back-view"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer text-gray-600 icon icon-tabler icon-tabler-chevron-right next-view "
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </div>
                    <div
                      className="flex items-center lg:border-r border-gray-300 pb-3 lg:pb-0 lg:px-6"
                      id="table-filter"
                    >
                      <div className="relative cursor-pointer">
                        <p className="text-base text-gray-600">List View</p>
                        <ul className="bg-white shadow rounded mt-2 py-1 absolute w-32 hidden">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                            View 1
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                            View 2
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                            View 3
                          </li>
                        </ul>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer ml-2 text-gray-600 icon icon-tabler icon-tabler-chevron-down pointer-event-none"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <div className="lg:ml-6 flex items-center">
                      <button
                        id="downloadAll-btn"
                        className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-500 px-5 h-8 flex items-center text-sm"
                      >
                        Download All
                      </button>

                      <div
                        id="addReport-btn"
                        className="ml-4 cursor-pointer focus:outline-none bg-indigo-500 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white icon icon-tabler icon-tabler-plus"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                      <div
                        id="report-modal"
                        className="hidden fixed z-10 lg:pt-5 left-0 top-0 w-full h-full overflow-auto shadow-lg display: none;"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                  <table className="min-w-full bg-white" id="main-table">
                    <thead>
                      <tr className="w-full h-16 border-gray-300 border-b border-t py-8">
                        <th className="pl-8 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          <input
                            type="checkbox"
                            className="w-5 h-5 cursor-pointer border rounded border-gray-400 bg-white"
                            id="all-check"
                          />
                        </th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          <div className="opacity-0 cursor-default relative w-10">
                            <div className="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-500 text-white flex justify-center items-center text-xs">
                              3
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-600 icon icon-tabler icon-tabler-file"
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            </svg>
                          </div>
                        </th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          Invoice Number
                        </th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          Client
                        </th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          Company Contact
                        </th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          Amount
                        </th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          Date
                        </th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                          <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400"></div>
                        </th>
                        <td className="text-gray-600 font-normal pr-8 text-sm tracking-normal leading-4 text-right">
                          More
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-24 border-gray-300 border-b">
                        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 tracking-normal leading-4">
                          <input
                            type="checkbox"
                            className="w-5 h-5 cursor-pointer border rounded border-gray-400 bg-white"
                            onClick="tableInteract(this)"
                          />
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                          <div className="relative w-10">
                            <div className="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-500 text-white flex justify-center items-center text-xs">
                              3
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-600 icon icon-tabler icon-tabler-file"
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            </svg>
                          </div>
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                          #MC10023
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                          User Research
                        </td>
                        <td className="pr-6 whitespace-no-wrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8">
                              <img
                                src="https://cdn.tuk.dev/assets/templates/Project+Management/pm_13.png"
                                alt=""
                                className="h-full w-full rounded-full overflow-hidden shadow"
                              />
                            </div>
                            <p className="ml-2 text-gray-800 tracking-normal leading-4 text-sm">
                              Carrie Anthony
                            </p>
                          </div>
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                          $2,500
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                          02.03.20
                        </td>
                        <td className="pr-6 relative tooltip-corner">
                          <div className="w-2 h-2 rounded-full bg-indigo-400 mx-auto"></div>
                          <div
                            className="absolute -mt-4 -ml-2 top-0 z-20 hidden tooltip"
                            role="tooltip"
                          >
                            <div className="absolute shadow-lg pt-4 pr-2 pl-3 pb-4 bg-white text-gray-600 rounded w-20 relative">
                              <svg
                                className="absolute bottom-0 -mb-2"
                                width="16px"
                                height="8px"
                                viewBox="0 0 16 8"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    id="Tooltips-"
                                    transform="translate(-84.000000, -203.000000)"
                                    fill="#FFFFFF"
                                  >
                                    <g
                                      id="Group-3-Copy"
                                      transform="translate(76.000000, 145.000000)"
                                    >
                                      <polygon
                                        className="shadow"
                                        id="Triangle"
                                        transform="translate(16.000000, 62.000000) rotate(-180.000000) translate(-16.000000, -62.000000) "
                                        points="16 58 24 66 8 66"
                                      ></polygon>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                              <p className="text-xs text-gray-600 leading-4">Waiting</p>
                            </div>
                          </div>
                        </td>
                        <td className="pr-8 relative">
                          <div className="dropdown flex justify-end">
                            <svg
                              onClick="dropdownFunction(this)"
                              xmlns="http://www.w3.org/2000/svg"
                              className="dropbtn text-gray-500 hover:text-gray-600 icon icon-tabler icon-tabler-dots-vertical"
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="19" r="1" />
                              <circle cx="12" cy="5" r="1" />
                            </svg>
                            <div
                              id="myDropdown1"
                              className="dropdown-content mr-5 absolute overflow-auto shadow-md z-10"
                            >
                              <ul className="bg-white shadow rounded mt-2 py-1 w-48">
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                  Edit
                                </li>
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                  Delete
                                </li>
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                  Duplicate
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
