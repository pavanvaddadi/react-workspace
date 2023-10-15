import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorObj = useRouteError();
  return (
    <div>
      <h3>OOps!! Something went wrong</h3>
      <h4>
        {errorObj.status}: {errorObj.statusText}
      </h4>
    </div>
  );
};

export default Error;
