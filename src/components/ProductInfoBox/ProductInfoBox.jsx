import React from "react";

export default function ProductInfoBox() {
  return (
    <div className="shadow-lg  h-90 rounded-2xl flex p-8 gap-5 items-center">
      <img
        src="https://th.bing.com/th/id/OIP.SqPeix4EH49hxjzBv8Tw_gHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="w-48 rounded-lg"
      />
      <div className=" flex flex-col items-center">
        <h1 className="text-center text-2xl mb-4">قهوه روبستا</h1>

        <p className="text-center text-md">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
        <br />
       
        <div className="container flex justify-between my-6">
          <button className="p-4 bg-red-500 rounded-3xl hover:bg-slate-700 hover:text-white">
            ویرایش محصول
          </button>
          <button className="p-4 bg-blue-500 rounded-3xl hover:bg-slate-700 hover:text-white">
            نمایش محصول
          </button>
        </div>
      
      </div>
    </div>
  );
}
