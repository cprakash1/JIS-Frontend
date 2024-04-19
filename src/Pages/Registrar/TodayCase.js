import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { getAllCourt } from "../../Utils/MainUtils/getAllCourt";
import { useToast } from "../../Context/ToastProvider";
import { todayCase } from "../../Utils/RegistrarUtils/todayCase";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";

const TodayCase = () => {
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const [date, setDate] = useState(new Date());
  const [todayCases, setTodayCases] = useState(null);
  const [court, setCourt] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState("");
  const { toast } = useToast();
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);

  useEffect(() => {
    async function fetchData() {
      const courtData = await getAllCourt(toast);
      setCourt(courtData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Today Cases</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Today-Cases
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
                  <label htmlFor="court" className="label">
                    Court:
                  </label>
                  <select
                    name="court"
                    id="court"
                    value={selectedCourt}
                    onChange={(e) => setSelectedCourt(e.target.value)}
                  >
                    <option value="">All Courts</option>
                    {court.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="date" className="label">
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={DateLiberary.displayDateInSelectorBox(date)}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={async () => {
                      try {
                        const dataToSend = {
                          court: selectedCourt,
                          date,
                          loginToken,
                        };
                        toast.info("Fetching Today Cases");
                        const response = await todayCase(dataToSend);
                        setTodayCases(response);
                        toast.success("Fetched Today Cases");
                      } catch (error) {
                        toast.error("Error Fetching Today Cases");
                        console.log(error);
                      }
                    }}
                  >
                    View Today Cases
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {todayCases && (
          <div className="order">
            <table>
              <tbody>
                <tr>
                  <th>CIN</th>
                  <th>Court Name</th>
                  <th>Date Time</th>
                  <th>Action</th>
                </tr>
                {todayCases &&
                  todayCases.map((item) => (
                    <tr key={item.CIN}>
                      <td>{item.CIN}</td>
                      <td>{item.court.name}</td>
                      <td>
                        {DateLiberary.displayDateTime(
                          item.nextHearing.dateTime
                        )}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            localStorage.setItem("CIN_DISPLAY", item.CIN);
                            navigate(`/registrar/case-view`);
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

export default TodayCase;
