import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userTypeSelector } from "../../Redux/auth/authSelector";

const PageNotFound = () => {
  const navigate = useNavigate();
  const userType = useSelector((state) => userTypeSelector(state));
  useEffect(() => {
    setTimeout(() => {
      navigate(`/${userType}`);
    }, 3000);
  }, []);
  return (
    <div>
      <div className="table-data">
        <div className="order">
          <h1>Page Not Found</h1>
          <br />
          <br />
          <h4>Redirecting You to dashboard Page.........</h4>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
