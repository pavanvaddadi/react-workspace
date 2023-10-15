import { ResCard } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function Body() {
  // use State is have special varible which returns an array
  // which is used maintain the state of a varible
  //  when ever you want to update the UI/ change the state use this setListOfRes to set the data
  // then DOM manipulation is going to happen

  let [listOfRes, setListOfRes] = useState([]);
  const filterData = () => {
    listOfRes = listOfRes.filter((eachRes) => {
      return eachRes.info.avgRating >= 4.2;
    });
    setListOfRes(listOfRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

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
