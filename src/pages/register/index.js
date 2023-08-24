import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
import { useGlobalState } from "../../context/GlobalState";
import Link from "next/link";
import jwtDecode from "jwt-decode";

function Register() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
    sport: "",
    social_media: "",
    phone_nbr: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleUserTypeChange = (event) => {
    setUser({ ...user, userType: event.target.value });
  };

  const handleSportChange = (event) => {
    setUser({ ...user, sport: event.target.value });
  };

  async function handleRegister(e) {
    console.log(e);
    e.preventDefault();
    user.username = user.email;
    authService.register(user);
    dispatch({
      currentUserToken: state.currentUserToken,
      currentUser: state.currentUser?.user_id,
    });
    router.push("/");
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex">
        <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
          {/* ...other input fields... */}
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="userType">User Type:</label>
            <select id="userType" name="userType" value={user.userType} onChange={handleUserTypeChange}>
              <option value="">Select User Type</option>
              <option value="athlete">Athlete</option>
              <option value="recruiter">recruiter</option>
            </select>
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="firstName">First Name:</label><br></br>
            <input
              className="border"
              type="text"
              id="firstName"
              required
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="lastName">Last Name:</label><br></br>
            <input
              className="border"
              type="text"
              id="lastName"
              required
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="email">Email:</label><br></br>
            <input
              className="border"
              type="text"
              id="email"
              required
              onChange={(e) => {
                let olduser = user;
                olduser.email = e.target.value;
                olduser.username = e.target.value;
                setUser(olduser);
              }}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="school">School:</label><br></br>
            <input
              className="border"
              type="school"
              id="school"
              required
              onChange={(e) => handleChange("school", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="sport">Sport:</label>
            <select id="sport" name="sport" value={user.sport} onChange={handleSportChange}>
              <option value="">Select Sport</option>
              <option value="basketball">Basketball</option>
              <option value="soccer">Soccer</option>
            </select>
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="phone number">Phone Number:</label><br></br>
            <input
              className="border"
              type="phone number"
              id="phone number"
              required
              onChange={(e) => handleChange("phone number", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="social media">Social Media User Name:</label><br></br>
            <input
              className="border"
              type="social media"
              id="social media"
              required
              onChange={(e) => handleChange("social media", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="password">Password:</label><br></br>
            <input
              className="border"
              type="password"
              id="password"
              required
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="passwordConf">Confirm Password:</label><br></br>
            <input
              className="border"
              type="password"
              id="passwordConf"
              required
              onChange={(e) => handleChange("passwordConf", e.target.value)}
            />
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Register!"
              className="bg-mtpurple text-white py-2 px-4 rounded-lg mx-auto my-2 font-bold disabled:opacity-60"
              disabled={
                user.password &&
                  user.password.length >= 8 &&
                  user.password === user.passwordConf &&
                  user.firstName &&
                  user.lastName &&
                  user.email
                  ? false
                  : true
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;