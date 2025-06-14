import React from "react";
import "../../styles/PersonalDetailsB.css";

const PersonalDetailsB = () => {
  return (
    <div className="containerB">
      <aside className="sidebar">
        <h2 className="logo">CRTD Technologies</h2>
        <p className="sub-line">Connecting freshers</p>
        <hr className="hr"></hr>
        <div className="user-info">
          <div className="avatar">J</div>
          <div>
            <p>John Francis D’Souza</p>
            <p className="email">john@gmail.com</p>
            <span className="status">Registration Pending</span>
          </div>
        </div>
        <hr></hr>
        <nav>
          <ul>
            <li ><div className="cont"><a href="#"><img src="./Dashboard.svg"></img></a>    Dashboard </div></li>
            <li className="active"><a href="#"><div className="cont"><img src="./Vector (2).svg"></img>    Personal details </div></a> <span className="badge pending">Pending</span></li>
            <li><a href="#"><div className="cont"><img src="./Vector (3).svg"></img>    Educational Info </div></a> <span className="badge pending">Pending</span></li>
            <li className="locked"><a href="#"><div className="cont"><img src="./Vector (4).svg"></img>    Job Board</div> </a> <span className="badge locked">Locked</span></li>
            <li className="locked"><a href="#"><div className="cont"><img src="./Vector (5).svg"></img>    Career Guidance</div> </a> <span className="badge locked">Locked</span></li>
            <li><a href="#"><div className="cont"><img src="./Vector (6).svg"></img>    Settings</div></a> </li>
            <hr></hr>
            <li><a href="#"><div className="cont"><button className="signout"><img className="signout-img" src="./Vector (7).svg"></img>Sign Out</button></div></a> </li>
          </ul>
        </nav>
        
        
      </aside>

      <main className="main-content">
        <div className="profile-incomplete">
          <p>Your profile is incomplete <br /> <span>Please complete your profile to access all features.</span></p>
        </div>

        <form className="details-form">
          <h3>Personal Details</h3>
          <div className="form-grid">
            <label>Email ID <input type="email" value="john@gmail.com" /></label>
            <label>Full Name <input type="text" value="John Francis D’Souza" /></label>
            <label>Date of Birth <input type="date" value="2005-03-01" /></label>
            <label>Father’s Name <input type="text" value="James" /></label>
            <label>Phone Number <input type="text" value="1234567890" /></label>
            <label>WhatsApp Number <input type="text" value="1234567890" /></label>
          </div>

          <h3>Permanent Address</h3>
          <div className="form-grid">
            <label>Birthplace State <input type="text" value="Andhra pradesh" /></label>
            <label>City <input type="text" value="Hyderabad" /></label>
            <label>PIN Code <input type="text" value="521352" /></label>
          </div>
          <textarea defaultValue="chirala, Andhrapradesh, Road No-12345" />
          {/* <label className="checkbox"><input type="checkbox" checked readOnly /> Check this box if your current address is the same as your permanent address.</label> */}
          <div className="checkBox">
            <input type="checkbox"/>
            <label >Check this box if your current address is the same as your permanent address.</label>
          </div>

          <h3>Current Address</h3>
          <div className="form-grid">
            <label>Current State <input type="text" value="Andhra pradesh" /></label>
            <label>City <input type="text" value="Hyderabad" /></label>
            <label>PIN Code <input type="text" value="521352" /></label>
          </div>
          <textarea defaultValue="chirala, Andhrapradesh, Road No-12345" />

          <button type="submit" className="edit-button">Edit Your Details</button>
        </form>

        <footer>
          <p>© 2025 CRTD Technologies. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default PersonalDetailsB;
