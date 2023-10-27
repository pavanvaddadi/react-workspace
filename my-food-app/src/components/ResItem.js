import { CDN_URL } from "../utils/constants";
const ResItem = (props) => {
  return (
    <div className="p-2 flex justify-between border-b-2 border-gray-100">
      <div className="w-10/12">
        <div className="font-bold">{props.item.name}</div>
        <div>₹ {props.item?.price / 100 || props.item?.defaultPrice / 100}</div>
        <p className="mt-2 text-gray-400 text-xs">{props.item.description}</p>
      </div>
      <div className="w-2/12  h-[100px] relative border-gray-200 border-2 p-1 rounded-md">
        <button className="absolute top-[70%] left-[30%] px-4 border-2 bg-white text-green-900 font-bold rounded-lg">
          ADD
        </button>
        <img
          className="w-[100%] h-[90px] rounded-sm"
          alt={""}
          src={`${CDN_URL}${props.item.imageId}`}
        ></img>
      </div>
    </div>
  );
};

export default ResItem;
