import React, { useEffect, useState } from "react";
import { getAllCourt } from "../../Utils/MainUtils/getAllCourt";
import { useToast } from "../../Context/ToastProvider";
import { getPendingCases } from "../../Utils/RegistrarUtils/getPendingCases";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { useNavigate } from "react-router-dom";

const PendingCase = () => {
  const { toast } = useToast();
  const [court, setCourt] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState("");
  const [pendingCases, setPendingCases] = useState(null);
  const loginToken = useSelector((state) => loginTokenSelector(state));

  useEffect(() => {
    async function fetchData() {
      const courtData = await getAllCourt(toast);
      setCourt(courtData);
    }
    fetchData();
  }, []);

  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);

  const handleClick = async () => {
    try {
      const dataToSend = {
        court: selectedCourt,
        loginToken,
      };
      toast.info("Fetching Pending Cases");
      const response = await getPendingCases(dataToSend);
      setPendingCases(response);
      toast.success("Fetched Pending Cases");
    } catch (error) {
      toast.error("Error Fetching Pending Cases");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Pending Case</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Pending-Case
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
                    onChange={(e) => {
                      setSelectedCourt(e.target.value);
                    }}
                  >
                    <option value="">Select Court</option>
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
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                    }}
                  >
                    View Case Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pendingCases && (
          <div className="order">
            <table>
              <tbody>
                <tr key={"hello"}>
                  <th>CIN</th>
                  <th>Case Status</th>
                </tr>
                {pendingCases.map((item) => (
                  <tr key={item._id}>
                    <td>{item.CIN}</td>
                    <td>{item.status}</td>
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

export default PendingCase;
