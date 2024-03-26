import React, { useEffect, useState } from "react";
import { useToast } from "../../Context/ToastProvider";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { resolvedCases } from "../../Utils/RegistrarUtils/resolvedCases";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";

const ResolvedCases = () => {
  const [resolvedCasesData, setResolvedCasesData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { toast } = useToast();
  const loginToken = useSelector((state) => loginTokenSelector(state));

  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);

  const handleClick = async () => {
    try {
      const dataToSend = {
        startDate: startDate,
        endDate: endDate,
        loginToken: loginToken,
      };
      toast.info("Fetching Resolved Cases");
      const response = await resolvedCases(dataToSend);
      setResolvedCasesData(response);
      toast.success("Fetched Resolved Cases");
    } catch (error) {
      console.log(error);
      toast.error("Error Fetching Resolved Cases");
    }
  };

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Resolved Cases</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Resolved-Cases
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
                  <label htmlFor="start-date" className="label">
                    Start Date:
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    name="start-date"
                    className="input-text"
                    value={DateLiberary.displayDateInSelectorBox(startDate)}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="end-date" className="label">
                    End Date:
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    name="end-date"
                    className="input-text"
                    value={DateLiberary.displayDateInSelectorBox(endDate)}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                    }}
                  >
                    View Resolved Cases
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {resolvedCasesData && (
          <div className="order">
            <table>
              <tbody>
                <tr>
                  <th>CIN</th>
                </tr>
                {resolvedCasesData.map((item) => (
                  <tr key={item._id}>
                    <td>{item.CIN}</td>
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

export default ResolvedCases;
