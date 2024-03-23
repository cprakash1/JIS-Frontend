import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { lawyerCaseView } from "../../Utils/LawyerUtils/lawyerCaseView";
import "./LawyerViewCase.css"; // Import CSS file
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";
import { lawyerCasesSeenSelector } from "../../Redux/lawyer/lawyerSelector";
import { addCasesSeen } from "../../Redux/lawyer/lawyerAction";

const LawyerViewCase = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "lawyer") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const [caseDetails, setCaseDetails] = useState([]);
  const [CIN, setCIN] = useState("");
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const caseSeen = useSelector((state) => lawyerCasesSeenSelector(state));
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const dataToSend = {
        CIN: CIN,
        loginToken: loginToken,
      };
      const response = await lawyerCaseView(dataToSend);
      setCaseDetails(response);
      const isCaseSeen = caseSeen.find((item) => item.CIN === CIN);
      if (!isCaseSeen) {
        dispatch(addCasesSeen({ CIN: CIN, _id: response._id }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <label htmlFor="CIN" className="label">
        CIN:
      </label>
      <input
        type="text"
        id="CIN"
        name="CIN"
        className="input-text"
        onChange={(e) => {
          setCIN(e.target.value);
        }}
      />
      <br />
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        View Case Details
      </button>
      <br />
      <br />
      <div className="case-details">
        Case Details:
        <br />
        {caseDetails && (
          <div>
            <p>Defendant Name: {caseDetails?.defendantName}</p>
            <p>Defendant Address: {caseDetails?.defendantAddress}</p>
            <p>Crime Type: {caseDetails?.crimeType}</p>
            <p>
              Date Committed:{" "}
              {DateLiberary.displayDateTime(caseDetails?.dateCommitted)}
            </p>
            <p>Location Committed: {caseDetails?.locationCommitted}</p>
            <p>Arresting Officer: {caseDetails?.arrestingOfficer}</p>
            <p>
              Arrest Date:{" "}
              {DateLiberary.displayDateTime(caseDetails?.arrestDate)}
            </p>
            <p>Judge: {caseDetails.judge?.name}</p>
            {caseDetails.lawyers && (
              <div>
                Lawyers:
                <ul>
                  {caseDetails.lawyers.map((lawyer) => {
                    return <li key={lawyer.id}>{lawyer.name}</li>;
                  })}
                </ul>
              </div>
            )}
            {caseDetails.publicProsecutor && (
              <div>
                Public Prosecutor:
                <ul>
                  {caseDetails.publicProsecutor.map((prosecutor) => {
                    return <li key={prosecutor.id}>{prosecutor.name}</li>;
                  })}
                </ul>
              </div>
            )}
            <p>Status: {caseDetails?.status}</p>
            <p>Victim: {caseDetails?.victim}</p>
            <p>CIN: {caseDetails?.CIN}</p>
            <p>
              Next Hearing:{" "}
              {DateLiberary.displayDateTime(caseDetails?.nextHearing?.dateTime)}
            </p>
            <p>Court Name: {caseDetails?.court?.name}</p>
            <p>Court Location: {caseDetails?.court?.location}</p>
            {caseDetails.summery && (
              <div>
                Summery:
                <ul>
                  {caseDetails.summery.map((summary) => {
                    return (
                      <li key={summary._id}>
                        {summary?.comment} -{" "}
                        {DateLiberary.displayDateTime(summary?.date)} -{" "}
                        {summary?.status}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LawyerViewCase;
