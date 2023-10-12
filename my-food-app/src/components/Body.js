import { ResCard } from "./ResCard";
import { resObj } from "../utils/mock-data";
import { useState } from "react";

function Body() {
  let [listOfRes, setListOfRes] = useState(resObj);
  const filterData = () => {
    listOfRes = listOfRes.filter((eachRes) => {
      return eachRes.info.avgRating >= 4.2;
    });
    setListOfRes(listOfRes);
  };

  return (
    <div>
      <div className="searchBox">
        <button className="btn" onClick={filterData}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        <div className="res-container">
          {listOfRes.map((eachRes) => {
            return <ResCard key={eachRes.info.id} resData={eachRes.info} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
