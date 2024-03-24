import React, { useEffect, useState } from "react";
import { getAllCourt } from "../../Utils/MainUtils/getAllCourt";
import "./Registration.css"; // Import CSS file for styling
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { registerCase } from "../../Utils/RegistrarUtils/registerCase";
import { getJudgeLawyer } from "../../Utils/RegistrarUtils/getJudgeLawyer";
import { useNavigate } from "react-router-dom";

const RegisterCase = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const [formData, setFormData] = useState({
    defendantName: "",
    defendantAddress: "",
    crimeType: "",
    dateCommitted: "",
    locationCommitted: "",
    arrestingOfficer: "",
    arrestDate: "",
    judge: "",
    lawyers: [],
    court: "",
    victim: "",
  });
  const [court, setCourt] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [judges, setJudges] = useState([]);
  const loginToken = useSelector((state) => loginTokenSelector(state));

  useEffect(() => {
    console.log(formData.judge, "fi", formData.lawyers);
  }, [formData.judge, formData.lawyers]);

  useEffect(() => {
    async function fetchData() {
      const courtData = await getAllCourt();
      setCourt(courtData);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const data = await getJudgeLawyer({
        courtId: formData.court,
        loginToken,
      });
      setLawyers(data.lawyers);
      setJudges(data.judges);
    }
    fetchData();
  }, [formData.court]);

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Register Case</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Register Case
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Register Case</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="defendantName">defendant Name</label>
                  <input
                    type="text"
                    id="defendantName"
                    value={formData.defendantName}
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
                  <label htmlFor="defendantAddress">defendant Address</label>
                  <input
                    type="text"
                    id="defendantAddress"
                    value={formData.defendantAddress}
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
                  <label htmlFor="crimeType">Crime Type</label>
                  <input
                    type="text"
                    id="crimeType"
                    value={formData.crimeType}
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
                  <label htmlFor="dateCommitted">Date Committed</label>
                  <input
                    type="date"
                    id="dateCommitted"
                    value={formData.dateCommitted}
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
                  <label htmlFor="locationCommitted">Location Committed</label>
                  <input
                    type="text"
                    id="locationCommitted"
                    value={formData.locationCommitted}
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
                  <label htmlFor="arrestingOfficer">Arresting Officer</label>
                  <input
                    type="text"
                    id="arrestingOfficer"
                    value={formData.arrestingOfficer}
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
                  <label htmlFor="arrestDate">Arrest Date</label>
                  <input
                    type="date"
                    id="arrestDate"
                    value={formData.arrestDate}
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
                  <label htmlFor="victim">Victim</label>
                  <input
                    type="text"
                    id="victim"
                    value={formData.victim}
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
                  <label htmlFor="court">Court</label>
                  <select
                    className="court-select"
                    name="court"
                    id="court"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  >
                    <option value="">Select Court</option>
                    {court.map((court) => (
                      <option value={court.id} key={court.id}>
                        {court.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="judge">Judge</label>
                  <select
                    className="court-select"
                    name="judge"
                    id="judge"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  >
                    <option value="">Select Judge</option>
                    {judges &&
                      judges.map((judge) => (
                        <option value={judge.id} key={judge.id}>
                          {judge.name}
                        </option>
                      ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lawyers">Lawyers</label>
                  <select
                    className="court-select"
                    name="lawyers"
                    id="lawyers"
                    multiple
                    onChange={(e) => {
                      const selected = Array.from(e.target.selectedOptions).map(
                        (option) => option.value
                      );
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: selected,
                      }));
                    }}
                  >
                    {lawyers &&
                      lawyers.map((lawyer) => (
                        <option value={lawyer.id} key={lawyer.id}>
                          {lawyer.name}
                        </option>
                      ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="register-button"
                    onClick={async (e) => {
                      e.preventDefault();
                      async function register() {
                        await registerCase({ ...formData, loginToken });
                      }
                      register();
                    }}
                  >
                    Register
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

export default RegisterCase;
