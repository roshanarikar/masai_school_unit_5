import { useEffect, useState } from "react";

export const Res = ({ rate,type , num}) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/restaurant");
      let data = await res.json();
      setResult(data);
    }
    getData();
  }, []);
  
  return (
    <div className="grid">
      {result
        .filter((el) => (num===0 ? el.ratings >= rate : el.accepts_card!==type))
        .map((el) => (
          <div className="box" key={el.id}>
            <div className="flex">
              <div className="img">
                <img src={el.image} alt="" />
              </div>
              <div>
                <div className="name">{el.name}</div>
                <div>Cost ₹{el.cost} for one</div>
                <div>
                  {el.accepts_card === "true"
                    ? "Accepts online payment only"
                    : "Accepts offline payment only"}
                </div>
              </div>
              <div className="right">
                <div className="ratings">{el.ratings}</div>
                <div>{el.votes} votes</div>
                <div>{el.reviews} reviews</div>
              </div>
            </div>
            <div className="Order">
              <div>Order online {">"} </div>
            </div>
          </div>
        ))}
    </div>
  );
};