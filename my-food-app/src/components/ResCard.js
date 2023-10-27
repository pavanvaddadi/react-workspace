import { CDN_URL } from "../utils/constants";

export function ResCard(data) {
  const { name, costForTwo, avgRating, cloudinaryImageId } = {
    ...data.resData,
  };

  return (
    <div className="w-[200px] h-[100%] p-1  border border-gray-200 rounded-md">
      <img
        className="w-[100%] h-[150px] rounded-lg"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>

      <div className="desc p-2">
        <h5 className="font-semibold">{name}</h5>
        <div className="py-1">{costForTwo}</div>
        <div className="py-1">Rating: {avgRating}</div>
        <div className="py-1">Delivery: {data.resData.sla.slaString}</div>
      </div>
    </div>
  );
}

export const withDiscount = (ResCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-black p-2 text-white font-bold rounded-md">
          {props?.resData?.aggregatedDiscountInfoV3?.header}&nbsp;
          {props?.resData?.aggregatedDiscountInfoV3?.subHeader}
        </div>
        <ResCard {...props} />
      </div>
    );
  };
};
