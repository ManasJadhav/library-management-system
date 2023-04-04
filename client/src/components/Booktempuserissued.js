import React from "react";
import { useNavigate } from "react-router-dom";

export default function Booktempuserissued(props) {
    const navigate = useNavigate();

    return (

        <div className="relative top-24 mb-10 bg-white shadow-xl shadow-blue-10 rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
            <div className="items-start px-4 py-6">
                <div className="flex justify-between items-center">

                    <div className="mb-4">
                        {/* <p className="text-gray-700">Book-Name: {props.post.book_name}</p> */}
                        <h1 className="text-4xl text-[#012a4a]"><strong>THE HARRY POTTER</strong></h1>
                        {/* <h2 className="mt-3 text-gray-700 text-sm">{props.post.author}</h2> */}
                        <h2 className="text-blue-8 text-sm ml-1">~ Mangya Jadhav</h2>
                    </div>
                    {/* <p className="mt-3 text-gray-700 text-sm">
              {props.post.status}
            </p> */}

                    <div>
                        <p className="mt-4 mr-12 text-green-900 font-semibold text-sm bg-green-400 py-1 px-3 rounded-xl">Available</p>
                    </div>

                </div>


                <div className="flex items-center">
                    <div className="flex mr-2 text-gray-700 text-sm">


                        <div className="flex items-center justify-center space-x-11">

                            <button
                                type="button"

                                className="text-md border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
                            >
                                Issue
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </div>);
}
