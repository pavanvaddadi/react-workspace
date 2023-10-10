import { CDN_URL } from "../utils/constants";
export function ResCard(data) {
  const { name, costForTwo, avgRating, cloudinaryImageId } = {
    ...data.resData,
  };

  return (
    <div className="res-card">
      <img
        className="my-card"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>

      <div className="desc">
        <h5>{name}</h5>
        <div>{costForTwo}</div>
        <div>Rating: {avgRating}</div>
        <div>{data.resData.sla.slaString}</div>
      </div>
    </div>
  );
}
