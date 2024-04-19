import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LawyerScheduleSelector } from "../../Redux/lawyer/lawyerSelector";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";
import {
  isLoggedinSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";

const LawyerSchedule = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "lawyer") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const lawyerSchedule = useSelector((state) => LawyerScheduleSelector(state));
  const [lawyerScheduleDisplay, setLawyerScheduleDisplay] = useState([]);
  useEffect(() => {
    async function fetchLawyerSchedule() {
      let temp = [...lawyerSchedule].sort((a, b) => a.dateTime - b.dateTime);
      setLawyerScheduleDisplay(temp);
    }
    fetchLawyerSchedule();
  }, [lawyerSchedule]);
  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Schedule</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Lawyer</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Schedule
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Schedule:</h3>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Case ID</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {lawyerScheduleDisplay.length === 0 && (
                <tr>
                  <td colSpan="3">No Schedule</td>
                </tr>
              )}
              {lawyerScheduleDisplay.map((schedule) => (
                <tr key={schedule._id}>
                  <td>{schedule?.case?.CIN}</td>
                  <td>{DateLiberary.displayDate(schedule.dateTime)}</td>
                  <td>{DateLiberary.displayTime(schedule.dateTime)}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        localStorage.setItem("CIN_DISPLAY", schedule.case.CIN);
                        navigate(`/lawyer/view-case`);
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
      </div>
    </>
  );
};

export default LawyerSchedule;
