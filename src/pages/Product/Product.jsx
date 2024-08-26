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
    <div className="flex flex-col gap-4 px-6">
      <div className="my-8 text-center ">
        <Link
          to="/addproduct"
          className="w-1/2 p-4 text-xl transition-all bg-orange-500 rounded-full hover:bg-violet-700 hover:text-white"
        >
          اضافه کردن محصول جدید
        </Link>
      </div>
      <div className="container flex lg:flex-row flex-col justify-between gap-4 min-w-[1200px]">
        <div className="bg-gray-200  rounded-lg shadow-md w-full">
          <h1 className="my-4 text-3xl text-center">{productItem[0].name}</h1>
          <div className="flex justify-between px-4 text-xl ">
            <h1>قیمت :</h1>
            <h1>{productItem[0].price}</h1>
          </div>
          <div className="flex justify-between px-4 mt-8 text-xl">
            <h1>موجودی :</h1>
            <h1>18</h1>
          </div>
          <div className="flex justify-between px-4 mt-8 text-xl">
            <h1>تعداد فروش :</h1>
            <h1>6</h1>
          </div>
          <div className="flex justify-between px-4 mt-8 text-xl">
            <h1>درصد فروش :</h1>
            <h1>%{productItem[0].persent} </h1>
          </div>
          <div className="flex justify-between px-4 mt-8 text-xl">
            <h1>درصد فروش واحد :</h1>
            <h1>%5</h1>
          </div>
        </div>
        <div className="bg-red-200 h-96 w-1/3">
          <img src={productItem[0].img} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="px-12">
        <h1 className="text-2xl">توضیحات :</h1>
        <p className="mt-4 bg-gray-50 rounded-md shadow-md px-4 leading-8 text-center">
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
      <div className="flex justify-between order-3 col-span-3 gap-5 p-8 ">
        <button className="flex items-center justify-center w-full gap-2 px-5 py-4 my-2 transition-all bg-red-500 rounded-full hover:bg-slate-600 hover:text-white">
          <FaTrash className="text-lg" /> حذف محصول
        </button>
        <Link
          to={`/addproduct/${productItem[0].id}`}
          className="flex items-center justify-center w-full gap-2 px-5 py-4 my-2 transition-all rounded-full hover:bg-slate-400 bg-sky-500"
        >
          <MdModeEdit className="text-lg" /> ویرایش محصول
        </Link>
      </div>
    </div>
  );
}
