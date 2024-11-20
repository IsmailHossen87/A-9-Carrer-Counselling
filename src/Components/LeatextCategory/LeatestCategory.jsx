
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LeatestCategory = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("PublicData.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
   <>
      <div ><h3 className="font-bold text-xl text-center my-4">Leatest Details</h3></div>
      <div className="bg-base-200 p-2 flex justify-center items-center gap-2">
      <p className="bg-[#a556f7] font-bold text-center text-white px-3 inline-block">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        {details?.map((data, index) => (
          <p
            key={index}
            className="text-black hover:underline mx-4"
          >
            {data.description}
          </p>
        ))}
      </Marquee>
    </div>
   </>
  );
};

export default LeatestCategory;
