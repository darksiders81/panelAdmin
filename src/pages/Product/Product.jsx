import React, { useState } from "react";
import { datas } from "../../data";
import { Link, useParams } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { FaTrash, FaPercentage } from "react-icons/fa";
export default function Product() {
  const [allproducts, setAllproducts] = useState(datas);
  const paramsID = useParams();
  const productItem = allproducts.filter(
    (product) => product.id === +paramsID.ID
  );


  return (
    <div className="conatiner">
      <div className="text-center mb-8">
        <Link
          to="/addproduct"
          className="w-1/2 bg-orange-500 p-4 text-xl rounded-full hover:bg-violet-700 hover:text-white transition-all"
        >
          اضافه کردن محصول جدید
        </Link>
      </div>
      <div className="grid grid-cols-3 ml-16 gap-8 ">
        <div className=" shadow-lg  py-4 bg-gray-100 col-span-2 mr-2 rounded-lg ">
          <h1 className="text-center text-3xl my-4">{productItem[0].name}</h1>
          <div className="flex justify-between px-4 text-xl ">
            <h1>قیمت :</h1>
            <h1>{productItem[0].price}</h1>
          </div>
          <div className="flex justify-between px-4 text-xl mt-8">
            <h1>موجودی :</h1>
            <h1>18</h1>
          </div>
          <div className="flex justify-between px-4 text-xl mt-8">
            <h1>تعداد فروش :</h1>
            <h1>6</h1>
          </div>
          <div className="flex justify-between px-4 text-xl mt-8">
            <h1>درصد فروش :</h1>
            <h1>%{productItem[0].persent} </h1>
          </div>
          <div className="flex justify-between px-4 text-xl mt-8">
            <h1>درصد فروش واحد :</h1>
            <h1>%5</h1>
          </div>
        </div>
        <div className="bg-red-500 h-96 w-96">
          <img
            src={productItem[0].img}
            alt=""
            className="w-full h-full shadow-md"
          />
        </div>
        <div className="max-w-[1200px] col-span-3 order-3">
          <div className="px-4 text-ellipsis  mt-1 shadow-md mr-5">
            <h1 className="text-2xl">توضیحات :</h1>
            <p className="text-center mt-4 leading-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
        <div className="col-span-3 order-3 p-8 gap-5 flex justify-between   ">
          <button className="py-4 w-full hover:bg-slate-600 hover:text-white transition-all bg-red-500 rounded-full px-5 my-2 flex justify-center items-center gap-2">
            <FaTrash className="text-lg" /> حذف محصول
          </button>
          <Link
            to={`/addproduct/${productItem[0].id}`}
            className="py-4 w-full hover:bg-slate-400 transition-all bg-sky-500 rounded-full px-5 my-2 flex justify-center items-center gap-2"
          >
            <MdModeEdit className="text-lg" /> ویرایش محصول
          </Link>
        </div>
      </div>
    </div>
  );
}
