import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("PublicData.json")
      .then((res) => res.json())
      .then((Data) => setData(Data));
  }, []);
  return (
    <>
    <div ><h3 className="font-bold text-2xl text-center my-4">All Service</h3></div>
      <div className="md:grid grid-cols-3 gap-4 my-4">
        {data.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
    </>
  );
};

export default Card;
