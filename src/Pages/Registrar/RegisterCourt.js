import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { registerCourt } from "../../Utils/RegistrarUtils/registerCourt";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const RegisterCourt = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const { toast } = useToast();

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Register Court</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Register Court
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Register Court</h3>
          </div>
          <table>
            <tbody>
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
                          toast.info("Registering Court...");
                          await registerCourt({ ...formData, loginToken });
                          toast.success("Court Registered");
                          setFormData({
                            name: "",
                            location: "",
                          });
                        } catch (error) {
                          toast.error("Error Registering Court");
                          console.log(error);
                        }
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

export default RegisterCourt;
