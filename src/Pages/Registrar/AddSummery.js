import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { addSummeryUtils } from "../../Utils/RegistrarUtils/addSummeryUtils";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const AddSummery = () => {
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    CIN: "",
    comment: "",
    status: "",
  });

  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Summery</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Summery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Add Summery</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="CIN">CIN</label>
                  <input
                    type="text"
                    id="CIN"
                    value={formData.CIN}
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
                  <label htmlFor="comment">Comment</label>
                  <input
                    type="text"
                    id="comment"
                    value={formData.comment}
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
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Summery">Summery</option>
                    <option value="Adjourned">Adjourned</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      async function addSummery() {
                        try {
                          await addSummeryUtils(
                            { ...formData, loginToken },
                            toast
                          );
                        } catch (e) {
                          console.log(e);
                          toast.error("Failed to add Summery");
                        }
                      }
                      addSummery();
                    }}
                  >
                    Add Summery
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

export default AddSummery;
