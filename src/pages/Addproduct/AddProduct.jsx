import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { datas } from "../../data";
export default function AddProduct() {
  const [titleInput, setTitleInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [urlImagInput, setUrlImgInput] = useState("");
  const [descrptionInput, setDescrptionInput] = useState("");
  const [allproducts, setAllproducts] = useState(datas);
  const paramsID = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const editProductItem = allproducts.filter(
    (product) => product.id === +paramsID.ID
  );
  console.log(editProductItem);
  useEffect(() => {
    if (editProductItem.length) {
      setIsEdit(true);
      setTitleInput(editProductItem[0].name);
      setPriceInput(editProductItem[0].price);
      setBrandInput(editProductItem[0].brand);
      setUrlImgInput(editProductItem[0].img);
      setDescrptionInput(editProductItem[0].persent);
    } else {
      setIsEdit(false);
    }
  }, []);

  return (
    <>
      <div className="text-center min-w-[1300px]">
        <div className="flex flex-col items-center justify-center h-screen ]">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            {isEdit ? (
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                محصول را ویرایش کنید
              </h2>
            ) : (
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                محصول را وارد کنید
              </h2>
            )}

            <form className="flex flex-col">
              <input
                value={titleInput}
                type="text"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="نام کالا را وارد کنید"
              />
              <input
                value={priceInput}
                type="number"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="قیمت کالا را وارد کنید"
              />
              <input
                value={brandInput}
                type="text"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="برند محصول را وارد کنید"
              />
              <input
                value={urlImagInput}
                type="text"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="لینک تصویر را وارد کنید"
              />
              <input
                value={descrptionInput}
                type="text"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="توضیحات در مورد محصول وارد کنید"
              />
              {/* <input
                type="file"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Resume"
              /> */}

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                افزودن به محصولات
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}