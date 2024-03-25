import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { updateCourt } from "../../Utils/RegistrarUtils/updateCourt";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const UpdateCourt = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const { toast } = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    location: "",
  });
  const loginToken = useSelector((state) => loginTokenSelector(state));

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Update Court</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Update Court
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Update Court</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="id">Id</label>
                  <input
                    type="text"
                    id="id"
                    value={formData.id}
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
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
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
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
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
                  <button
                    className="btn btn-primary"
                    onClick={async (e) => {
                      e.preventDefault();
                      async function register() {
                        try {
                          await updateCourt({ ...formData, loginToken }, toast);
                          setFormData({
                            id: "",
                            name: "",
                            location: "",
                          });
                        } catch (e) {
                          toast.error("Failed to update court");
                          console.log(e);
                        }
                      }
                      register();
                    }}
                  >
                    Update
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

export default UpdateCourt;
