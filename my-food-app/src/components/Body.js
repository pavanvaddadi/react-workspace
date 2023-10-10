import { ResCard } from "./ResCard";
import { resObj } from "../utils/mock-data";

function Body() {
  return (
    <div>
      <div className="searchBox">
        <h4>Search Here</h4>
      </div>
      <div className="card-container">
        <div className="res-container">
          {resObj.map((eachRes) => {
            return <ResCard key={eachRes.info.id} resData={eachRes.info} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
