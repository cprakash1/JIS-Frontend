import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { assignDate, getDates } from "../../Utils/RegistrarUtils/assignDate";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const AssignDate = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const [formData, setFormData] = useState({
    CIN: "",
    dateSelected: "",
  });
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const [dateArray, setDateArray] = useState([]);
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(true);
  const { toast } = useToast();

  async function register() {
    try {
      toast.info("Getting Dates..");
      const data = await getDates({ ...formData, loginToken });
      setDateArray(data);
      toast.success("Dates Fetched");
      setDisabled1(true);
      setDisabled2(false);
    } catch (e) {
      console.log(e);
      toast.error("Error Fetching Dates");
      setDisabled1(true);
      setDisabled2(false);
    }
  }

  async function assignDateToCIN() {
    try {
      toast.info("Assinging Date..");
      const data = await assignDate({ ...formData, loginToken });
      toast.success("Date Assigned");
      setDisabled1(false);
      setDisabled2(true);
    } catch (e) {
      toast.error("Error Assigning Date");
      console.log(e);
      setDisabled1(false);
      setDisabled2(true);
    }
  }

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Assign Date</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Assign Date
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Assign Date</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="CIN">CIN</label>
                  <input
                    className="login-input"
                    type="text"
                    id="CIN"
                    value={formData.CIN}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    disabled={disabled1}
                    onClick={async (e) => {
                      e.preventDefault();
                      register();
                    }}
                  >
                    Get Case
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="date">Date</label>
                  <select
                    className="login-input"
                    id="dateSelected"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  >
                    <option value="">Select Date</option>
                    {dateArray.map((date) => (
                      <option value={date} key={date}>
                        {DateLiberary.displayDateTime(date)}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    disabled={disabled2}
                    onClick={async (e) => {
                      e.preventDefault();
                      assignDateToCIN();
                    }}
                  >
                    Assign Date
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssignDate;
