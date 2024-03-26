import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <div className="table-data">
        <div className="order">
          <img
            src="./logo192.png"
            alt=""
            style={{
              width: "100px",
              display: "block",
              height: "100px",
              borderRadius: "50%",
              margin: "auto",
              alignContent: "center",
            }}
          />
          <div className="container">
            <h1>Welcome to the Judiciary Information System (JIS)!</h1>
            <p>
              We are pleased to welcome you to our comprehensive platform
              designed to streamline court case management and enhance access to
              legal information. Whether you're a judge, lawyer, or legal
              professional, our system is tailored to meet your needs
              efficiently and effectively.
            </p>
            <p>
              With JIS, you can easily manage pending cases, track resolutions,
              schedule hearings, and access vital case details with just a few
              clicks. Our user-friendly interface ensures smooth navigation,
              allowing you to focus on your legal duties without unnecessary
              complications.
            </p>
            <p>
              Explore our system to discover its full range of features,
              including quick access to pending and resolved cases, convenient
              search functionalities, and robust user account management. Stay
              informed with upcoming hearings, recent activity updates, and
              important announcements through our intuitive dashboard.
            </p>
            <p>
              Thank you for choosing JIS as your trusted partner in legal
              management. We are committed to providing you with a seamless
              experience and empowering you with the tools you need to succeed
              in the legal realm.
            </p>
            <p>
              Let's navigate the world of law together, with JIS by your side.
            </p>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Link to="/login" className="btn btn-primary">
                Get Started
              </Link>
              <br />
              <br />
              <Link to="/about" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
