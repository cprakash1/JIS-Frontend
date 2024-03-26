import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  lawyerPaymentHistorySelector,
  lawyerPaymentLeftSelector,
} from "../../Redux/lawyer/lawyerSelector";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { addLawyerPaymentAsync } from "../../Redux/lawyer/lawyerAction";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const LawyerPayment = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();

  const { toast } = useToast();
  useEffect(() => {
    if (!isLoggedin || userType !== "lawyer") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const paymentLeft = useSelector((state) => lawyerPaymentLeftSelector(state));
  const paymentHistory = useSelector((state) =>
    lawyerPaymentHistorySelector(state)
  );
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const [paying, setPaying] = useState(0);
  const [status, setStatus] = useState("success");
  const dispatch = useDispatch();
  async function handlePayment() {
    try {
      const dataToSend = {
        loginToken,
        amount: paying,
        status: status,
      };
      toast.info("Paying");
      dispatch(addLawyerPaymentAsync(dataToSend, toast));
      setPaying(0);
      setStatus("success");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Payment</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Lawyer</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Payment
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3> Payment Left: {paymentLeft}</h3>
          </div>
        </div>
        <div className="order">
          <div className="head">
            <h3>Pay</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    id="amount"
                    value={paying}
                    onChange={(e) => setPaying(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="status">Status:</label>
                  <input
                    type="text"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handlePayment();
                    }}
                  >
                    Pay
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="order">
          <div className="head">
            <h3>Payment History:</h3>
          </div>
          <table className="table">
            <thead>
              <tr id="begin">
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.length === 0 && (
                <tr>
                  <td colSpan="2">No Payment History</td>
                </tr>
              )}
              {paymentHistory.map((payment) => (
                <tr key={payment._id}>
                  <td>{DateLiberary.displayDateTime(payment.date)}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LawyerPayment;
