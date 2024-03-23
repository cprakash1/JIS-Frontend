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

const LawyerPayment = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
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
    const dataToSend = {
      loginToken,
      amount: paying,
      status: status,
    };
    dispatch(addLawyerPaymentAsync(dataToSend));
  }

  return (
    <div>
      <h1>Payment</h1>
      <p>Payment Left: {paymentLeft}</p>
      <br />
      <br />
      <br />
      <label htmlFor="amount">Amount</label>
      <br />
      <input
        type="number"
        id="amount"
        value={paying}
        onChange={(e) => setPaying(e.target.value)}
      />
      <br />
      <label htmlFor="status">Status:</label>
      <br />
      <input
        type="text"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          handlePayment();
        }}
      >
        Pay
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LawyerPayment;
