import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <ClipLoader
      color={"#0000FF"}
      loading={true}
      // cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
