import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { judgeScheduleSelector } from "../../Redux/judge/judgeSelector";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";
import {
  isLoggedinSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";

const JudgeSchedule = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "judge") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const judgeSchedule = useSelector((state) => judgeScheduleSelector(state));
  const [judgeScheduleDisplay, setJudgeScheduleDisplay] = useState([]);
  useEffect(() => {
    async function fetchJudgeSchedule() {
      let temp = [...judgeSchedule].sort((a, b) => a.dateTime - b.dateTime);
      setJudgeScheduleDisplay(temp);
    }
    fetchJudgeSchedule();
  }, [judgeSchedule]);
  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Schedule</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Judge</a>
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
          <table>
            <tbody>
              <tr>
                <th scope="col">Case ID</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
              </tr>
            </tbody>
            <tbody>
              {judgeScheduleDisplay.length === 0 && (
                <tr>
                  <td colSpan="3">No Schedule</td>
                </tr>
              )}
              {judgeScheduleDisplay.map((schedule) => (
                <tr key={schedule._id}>
                  <td>{schedule?.case?.CIN}</td>
                  <td>{DateLiberary.displayDate(schedule.dateTime)}</td>
                  <td>{DateLiberary.displayTime(schedule.dateTime)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JudgeSchedule;
