import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  loginTokenSelector,
  userTypeSelector,
  isLoggedinSelector,
} from "../../Redux/auth/authSelector";
import { useNavigate } from "react-router-dom";
import { searchCase } from "../../Utils/MainUtils/searchCaseUtils";
import { useToast } from "../../Context/ToastProvider";

const SearchCases = () => {
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const { toast } = useToast();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (keyword.length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [disabled, keyword]);

  useEffect(() => {
    if (
      !isLoggedin ||
      (userType !== "registrar" &&
        userType !== "lawyer" &&
        userType !== "judge")
    ) {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);

  const handleClick = async () => {
    try {
      const dataToSend = {
        keyword: keyword,
        loginToken: loginToken,
      };
      toast.info("Searching Case");
      const response = await searchCase(dataToSend, userType);
      setSearchResult(response);
      toast.success("Case Found");
    } catch (error) {
      console.log(error);
      toast.error("Error Searching Case");
    }
  };

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Search Case</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">
                {userType === "registrar"
                  ? "Registrar"
                  : userType === "lawyer"
                  ? "Lawyer"
                  : "Judge"}
              </a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Search-Case
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="keyword">Keyword : </label>
                  <input
                    type="text"
                    id="keyword"
                    className="search-box"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    disabled={disabled}
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    Search
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {searchResult && (
          <div className="order">
            <table>
              <tbody>
                <tr>
                  <th>CIN</th>
                  <th>Crime Type</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {searchResult.map((caseData) => (
                  <tr key={caseData.CIN}>
                    <td>{caseData.CIN}</td>
                    <td>{caseData.crimeType}</td>
                    <td>{caseData.createdAt}</td>
                    <td>{caseData.status}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          localStorage.setItem("CIN_DISPLAY", caseData.CIN);
                          if (userType === "registrar")
                            navigate(`/registrar/case-view`);
                          else if (userType === "lawyer")
                            navigate(`/lawyer/view-case`);
                          else if (userType === "judge")
                            navigate(`/judge/view-case`);
                        }}
                      >
                        ViewCase
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCases;
