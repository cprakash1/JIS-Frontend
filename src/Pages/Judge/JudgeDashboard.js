import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import DateLiberary from "../../Helper/DateLiberary";
import {
  judgeIsFetchingSelector,
  judgeSelector,
} from "../../Redux/judge/judgeSelector";
import { fetchJudgeAsync } from "../../Redux/judge/judgeAction";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

import Loader from "../Main/Loader";

const JudgeDashboard = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "judge") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const isFetched = useSelector((state) => judgeIsFetchingSelector(state));
  const judge = useSelector((state) => judgeSelector(state));
  const dispatch = useDispatch();
  const { toast } = useToast();

  useEffect(() => {
    if (isFetched) return;
    toast.info("Fetching Judge Data...");
    dispatch(fetchJudgeAsync({ loginToken }, toast));
  }, []);

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Judge</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isFetched ? (
        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>INFO:</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>ID: </strong>
                    {judge?.id}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Name:</strong> {judge?.name}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Email:</strong> {judge?.email}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone: </strong>
                    {judge?.phone}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Address:</strong> {judge?.address}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Court Name: </strong>
                    {judge?.court?.name}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Court Location:</strong> {judge?.court?.location}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="order">
            <div className="head">
              <h3>Schedule:</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Date Time</th>
                  <th>CIN</th>
                </tr>
                {judge?.schedule?.map((schedule, index) => (
                  <tr key={index}>
                    <td>{DateLiberary.displayDateTime(schedule.dateTime)}</td>
                    <td>{schedule?.case?.CIN}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="order">
            <div className="head">
              <h3>Cases Seen:</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>CIN</th>
                </tr>
                {judge?.casesSeen?.map((casesSeen, index) => (
                  <tr key={index}>
                    <td>{casesSeen.CIN}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="order">
            <div className="head">
              <h3>History:</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Comment</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>CIN</th>
                </tr>
                {judge?.history?.map((history, index) => (
                  <tr key={index}>
                    <td>{history.comment}</td>
                    <td>{DateLiberary.displayDateTime(history.date)}</td>
                    <td>{history.status}</td>
                    <td>{history?.case?.CIN}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default JudgeDashboard;
