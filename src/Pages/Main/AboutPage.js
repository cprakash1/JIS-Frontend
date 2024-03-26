import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <div className="table-data">
        <div className="order">
          <div className="container">
            <h1>Team Members & TA</h1>

            <div className="ta-assigned">
              <h2>T.A Assigned</h2>
              <div className="ta">
                <p>Name: Rahul Sir</p>
              </div>
            </div>
            <div className="team-members">
              <h2>Team Members</h2>
              <div className="member">
                <p>Name: Bommisetty Sai Anvith</p>
                <p>Roll No.: 21JE0247</p>
              </div>
              <div className="member">
                <p>Name: Budamakuntla Anil</p>
                <p>Roll No.: 21JE0252</p>
              </div>
              <div className="member">
                <p>Name: Chahat Jain</p>
                <p>Roll No.: 21JE0257</p>
              </div>
              <div className="member">
                <p>Name: Chandra Prakash</p>
                <p>Roll No.: 21JE0260</p>
              </div>
              <div className="member">
                <p>Name: Chenreddy Sumana</p>
                <p>Roll No.: 21JE0263</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
