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
  useEffect(() => {
    if (isFetched) return;
    dispatch(fetchJudgeAsync({ loginToken }));
  }, []);

  return (
    <div>
      <h1>Lawyer Dashboard</h1>
      ID: {judge?.id}
      <br />
      Name: {judge?.name}
      <br />
      Email: {judge?.email}
      <br />
      Phone: {judge?.phone}
      <br />
      Address: {judge?.address}
      <br />
      Court Name: {judge?.court?.name}
      <br />
      Court Location: {judge?.court?.location}
      <br />
      Schedule:
      <ul>
        {judge?.schedule?.map((schedule, index) => (
          <li key={index}>
            {DateLiberary.displayDateTime(schedule.dateTime)}-
            {schedule?.case?.CIN}
          </li>
        ))}
      </ul>
      <br />
      Cases Seen:{" "}
      <ul>
        {judge?.casesSeen?.map((casesSeen, index) => (
          <li key={index}>{casesSeen.CIN}</li>
        ))}
      </ul>
      <br />
      History:
      <ul>
        {judge?.history?.map((history, index) => (
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

export default JudgeDashboard;
