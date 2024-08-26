import React from 'react'
import { FaTrash } from 'react-icons/fa6'

export default function EditBtn(props) {
    return (
        <>

            <button className="flex items-center justify-center w-full gap-2 px-5 py-4 my-2 transition-all bg-red-500 rounded-full hover:bg-slate-600 hover:text-white">
                <FaTrash /> {props.contentBtn}
            </button>





        </>
    )
}
