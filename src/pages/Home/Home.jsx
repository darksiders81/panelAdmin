import { useState } from "react";
import Chart from "../../components/Chart/Chart";
import ChartMonth from "../../components/ChartMonth/ChartMonth";
import DescrptionBox from "../../components/DescrptionBox/DescrptionBox";
import { datas, users, analisisDatas } from "../../data";
import UserBox from "../../components/UsersBox/UserBox";
import { IoIosArrowDown } from "react-icons/io";
import WeekChart from "../../components/WeekChart/WeekChart";
import AnalysisBox from "../../components/AnalysisBox/AnalysisBox";
import ProfittoBuyChart from "../../components/ProfittoBuyChart/ProfittoBuyChart";

export default function Home() {
  const [productsData, setproductData] = useState(datas);
  const [allUsers, setAllUsers] = useState(users);
 
 

  return (
    <div className="container">
      <div className="container grid gap-4  grid-cols-3">
        {analisisDatas.map((data) => (
          <>
            <AnalysisBox {...data} />
          </>
        ))}
      </div>
      <h1
        className="text-center items-center px-2 text-2xl mt-8 text-blue-700 bg-gray-200 py-2 "
        
      >
     
        نمودار فروش
        
      </h1>
     <Chart dataChart={datas} />

      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2">
        آنالیز فروش ماهانه
      </h1>
      <ChartMonth />
      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2 my-10">
        آنالیز هفتگی فروش
      </h1>
      <WeekChart />
      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2">
        آنالیز فروش محصولات
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 my-12">
        {productsData.map((product) => (
          <>
            <DescrptionBox {...product} />
          </>
        ))}
      </div>
      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2">
        کاربران
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-5 gap-2">
        {allUsers.map((user) => (
          <>
            <UserBox {...user} />
          </>
        ))}
      </div>
      <h1 className="text-center text-2xl mt-8 text-blue-700 bg-gray-200 py-2">
        آنالیز خرید کاربران
      </h1>
      <Chart dataChart={users} />
      
    </div>
  );
}
