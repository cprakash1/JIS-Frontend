import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import {
  lawyerIsFetchedSelector,
  lawyerSelector,
} from "../../Redux/lawyer/lawyerSelector";
import { fetchLawyerAsync } from "../../Redux/lawyer/lawyerAction";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";

const LawyerDashboard = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "lawyer") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const isFetched = useSelector((state) => lawyerIsFetchedSelector(state));
  const lawyer = useSelector((state) => lawyerSelector(state));
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFetched) return;
    dispatch(fetchLawyerAsync({ loginToken }));
  }, []);

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Lawyer</a>
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
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>INFO:</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>ID:</strong> {lawyer?.id}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <strong> Name: </strong>
                  {lawyer?.name}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <strong> Email:</strong> {lawyer?.email}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <strong> Phone: </strong>
                  {lawyer?.phone}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Address: </strong>
                  {lawyer?.address}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Court Name: </strong>
                  {lawyer?.court?.name}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Court Location:</strong> {lawyer?.court?.location}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Payment Left:</strong> {lawyer?.paymentLeft}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="order">
          <div className="head">
            <h3>Payment History:</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
              {lawyer?.paymentHistory?.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.amount}</td>
                  <td>{DateLiberary.displayDateTime(payment.date)}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="order">
          <div className="head">
            <h3>Schedule:</h3>
          </div>

          <table>
            <tbody>
              <tr>
                <th>Date - Time</th>
                <th>CIN</th>
              </tr>
              {lawyer?.schedule?.map((schedule, index) => (
                <tr key={index}>
                  <td>{DateLiberary.displayDateTime(schedule.dateTime)}</td>
                  <td>{schedule?.case?.CIN}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="order">
          <div className="head">
            <h3>Cases Seen:</h3>
          </div>

          <table>
            <tbody>
              <tr>
                <th>CIN</th>
              </tr>
              {lawyer?.casesSeen?.map((casesSeen, index) => (
                <tr key={index}>
                  <td>{casesSeen.CIN}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="order">
          <div className="head">
            <h3>History:</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Comment</th>
                <th>Date - Time</th>
                <th>Status</th>
                <th>CIN</th>
              </tr>
              {lawyer?.history?.map((history, index) => (
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
    </>
  );
};

export default LawyerDashboard;
