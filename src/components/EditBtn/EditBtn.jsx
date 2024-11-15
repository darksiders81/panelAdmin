import React from 'react'
import { FaTrash } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function EditBtn(props) {
    let navigate = useNavigate()
    const deleteHandler = () => {
        Swal.fire({
            title: "حذف محصول",
            text: "ایا از حذف محصول مطمئن هستید",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "بله"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "حذف",
                    text: "محصول با موفقیت حذف شد",
                    icon: "success"
                });
                navigate('/products')
            }
        });


    }
    return (
        <>

            <button onClick={deleteHandler} className="flex items-center justify-center w-full gap-2 px-5 py-4 my-2 transition-all bg-red-500 rounded-full hover:bg-slate-600 hover:text-white">
                <FaTrash /> {props.contentBtn}
            </button>





        </>
    )
}
