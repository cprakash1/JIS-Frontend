import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { lawyerCaseView } from "../../Utils/LawyerUtils/lawyerCaseView";
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
  const [caseDetails, setCaseDetails] = useState(null);
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
    <>
      <div className="head-title">
        <div className="left">
          <h1>Case View</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Lawyer</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Case-View
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
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
        </div>

        <div className="order">
          <div className="head">
            <h3>Case Details:</h3>
          </div>
          {caseDetails && (
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Defendant Name:</strong>{" "}
                    {caseDetails?.defendantName}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Defendant Address:</strong>{" "}
                    {caseDetails?.defendantAddress}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Crime Type:</strong> {caseDetails?.crimeType}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Date Committed:</strong>
                    {DateLiberary.displayDateTime(caseDetails?.dateCommitted)}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Location Committed:</strong>{" "}
                    {caseDetails?.locationCommitted}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Arresting Officer:</strong>{" "}
                    {caseDetails?.arrestingOfficer}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Arrest Date:</strong>
                    {DateLiberary.displayDateTime(caseDetails?.arrestDate)}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Judge:</strong> {caseDetails.judge?.name}
                  </td>
                </tr>
                {caseDetails.lawyers && (
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <strong>Lawyers:</strong>
                            </th>
                          </tr>
                          <>
                            {caseDetails.lawyers.map((lawyer) => {
                              return (
                                <tr key={lawyer.id}>
                                  <td>{lawyer.name}</td>
                                </tr>
                              );
                            })}
                          </>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
                {caseDetails.publicProsecutor && (
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <strong>Public Prosecutor:</strong>
                            </th>
                          </tr>
                          <>
                            {caseDetails.publicProsecutor.map((prosecutor) => {
                              return (
                                <tr key={prosecutor.id}>
                                  <td>{prosecutor.name}</td>
                                </tr>
                              );
                            })}
                          </>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
                <tr>
                  <td>
                    <strong>Status:</strong> {caseDetails?.status}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Victim: </strong>
                    {caseDetails?.victim}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>CIN:</strong> {caseDetails?.CIN}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Next Hearing:</strong>
                    {DateLiberary.displayDateTime(
                      caseDetails?.nextHearing?.dateTime
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Court Name:</strong> {caseDetails?.court?.name}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Court Location: </strong>
                    {caseDetails?.court?.location}
                  </td>
                </tr>
                {caseDetails.summery && (
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <strong>Summery:</strong>
                            </th>
                          </tr>
                          <tr>
                            <th>Comment</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                          <>
                            {caseDetails.summery.map((summary) => {
                              return (
                                <tr key={summary._id}>
                                  <td>{summary?.comment}</td>
                                  <td>
                                    {DateLiberary.displayDateTime(
                                      summary?.date
                                    )}
                                  </td>
                                  <td>{summary?.status}</td>
                                </tr>
                              );
                            })}
                          </>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default LawyerViewCase;
