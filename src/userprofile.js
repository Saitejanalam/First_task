import React from "react";
import "./userprofile.css";

const UserProfile = () => {
  return (
    <div className="userprofilebody">
      <h1>userprofile</h1>

      <form>
        <label Htmlfor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="" />
        <br />
        <label Htmlfor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="" />
        <br />
        <label Htmlfor="contact">Mobile no:</label>
        <br />
        <input type="number" id="contact" name="contact" value="" />
        <br />
        <label Htmlfor="Email">Email</label>
        <br />
        <input type="text" id="email" name="email" value="" />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserProfile;
