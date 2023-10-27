import { ResCard, withDiscount } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  // use State is have special varible which returns an array
  // which is used maintain the state of a varible
  //  when ever you want to update the UI/ change the state use this setListOfRes to set the data
  // then DOM manipulation is going to happen

  let [listOfRes, setListOfRes] = useState([]);
  let [filteredRes, setFilteredRes] = useState([]);
  let [searchKey, setSearchKey] = useState("");

  const ResCardWithDiscount = withDiscount(ResCard);

  const filterData = () => {
    filteredRes = listOfRes
      .filter((eachRes) => {
        return eachRes.info.avgRating >= 4.2;
      })
      .sort((a, b) => b.info.avgRating - a.info.avgRating);
    setFilteredRes(filteredRes);
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

    setFilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.warn(filteredRes);

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  const onTextChange = (e) => {
    setSearchKey(e.target.value);
  };
  const onSearch = () => {
    filteredRes = listOfRes.filter((eachRes) => {
      return eachRes.info.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    setFilteredRes(filteredRes);
  };

  return (
    <div className="p-4 bg-slate-50">
      <div className="flex items-center m-4">
        <div className="flex">
          <input
            type="text"
            className="border-2 pr-4"
            value={searchKey}
            onChange={onTextChange}
          />
          <button
            className="bg-blue-900 text-white p-2 mx-2 rounded-md"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
        <button
          className="btn bg-gray-200 p-2 mr-2 rounded-md"
          onClick={filterData}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex">
        <div className="flex flex-wrap">
          {filteredRes.map((eachRes) => {
            return (
              <Link
                key={eachRes.info.id}
                to={`restaurant/${eachRes.info.id}`}
                className="m-2 bg-gray-50 rounded-md"
              >
                {eachRes.info?.aggregatedDiscountInfoV3 !== undefined ? (
                  <ResCardWithDiscount resData={eachRes.info} />
                ) : (
                  <ResCard resData={eachRes.info} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
