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
    <div>
      <h1>Lawyer Dashboard</h1>
      ID: {lawyer?.id}
      <br />
      Name: {lawyer?.name}
      <br />
      Email: {lawyer?.email}
      <br />
      Phone: {lawyer?.phone}
      <br />
      Address: {lawyer?.address}
      <br />
      Court Name: {lawyer?.court?.name}
      <br />
      Court Location: {lawyer?.court?.location}
      <br />
      Payment Left: {lawyer?.paymentLeft}
      <br />
      Payment History:
      <ul>
        {lawyer?.paymentHistory?.map((payment, index) => (
          <li key={index}>
            Amount: {payment.amount}
            <br />
            Date: {DateLiberary.displayDateTime(payment.date)}
            <br />
            Status: {payment.status}
            <br />
          </li>
        ))}
      </ul>
      <br />
      Schedule:
      <ul>
        {lawyer?.schedule?.map((schedule, index) => (
          <li key={index}>
            {DateLiberary.displayDateTime(schedule.dateTime)}-
            {schedule?.case?.CIN}
          </li>
        ))}
      </ul>
      <br />
      Cases Seen:{" "}
      <ul>
        {lawyer?.casesSeen?.map((casesSeen, index) => (
          <li key={index}>{casesSeen.CIN}</li>
        ))}
      </ul>
      <br />
      History:
      <ul>
        {lawyer?.history?.map((history, index) => (
          <li key={index}>
            Comment: {history.comment}
            <br />
            Date: {DateLiberary.displayDateTime(history.date)}
            <br />
            Status: {history.status}
            <br />
            CIN: {history?.case?.CIN}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerDashboard;
