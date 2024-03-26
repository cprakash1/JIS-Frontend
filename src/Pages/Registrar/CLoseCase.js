import React, { useEffect, useState } from "react";
import { useToast } from "../../Context/ToastProvider";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { registrarCloseCase } from "../../Utils/RegistrarUtils/registrarCloseCase";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";

const CLoseCase = () => {
  const [CIN, setCIN] = useState("");
  const [date, setDate] = useState(Date.now());
  const { toast } = useToast();
  const loginToken = useSelector((state) => loginTokenSelector(state));

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
        CIN: CIN,
        loginToken: loginToken,
        date: date,
      };
      toast.info("Closing Case");
      const response = await registrarCloseCase(dataToSend);
      toast.success("Case Closed");
      setCIN("");
      setDate(Date.now());
    } catch (error) {
      console.log(error);
      toast.error("Error Closing Case");
    }
  };
  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Close Case</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Close-Case
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
                  <label htmlFor="CIN" className="label">
                    CIN:
                  </label>
                  <input
                    type="text"
                    id="CIN"
                    name="CIN"
                    value={CIN}
                    className="input-text"
                    onChange={(e) => {
                      setCIN(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="date" className="label">
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={DateLiberary.displayDateInSelectorBox(date)}
                    className="input-text"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
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
                    Close Case
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CLoseCase;
