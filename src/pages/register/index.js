import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from 'jwt-decode';

function Register() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    schoolId: "",       // New input field for school_id
    phoneNbr: "",       // New input field for phone_nbr
    socialMedia: "",    // New input field for social_media
    sport: "",          // New input field for sport
    player: false,      // New input field for player
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await AuthService.register(user);

      const loginResp = await AuthService.login(user.email, user.password, user.username);

      if (loginResp.access) {
        const data = jwtDecode(loginResp.access);
        await dispatch({
          type: 'SET_USER',
          payload: data,
        });
        router.push('/user-profile');
      } else {
        console.log('Login after registration failed');
        dispatch({ type: 'LOGOUT_USER' });
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <div className="w-screen h-screen">
      <div className='container'>
        <h1>Register</h1>
        <div className="flex">
          <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
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
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="school">School:</label><br />
              <input
                className="border"
                type="text"
                id="school"
                required
                onChange={(e) => handleChange("school", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="phoneNbr">Phone Number:</label><br />
              <input
                className="border"
                type="text"
                id="phoneNbr"
                required
                onChange={(e) => handleChange("phoneNbr", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="socialMedia">Social Media:</label><br />
              <input
                className="border"
                type="text"
                id="socialMedia"
                required
                onChange={(e) => handleChange("socialMedia", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="sport">Sport:</label><br />
              <input
                className="border"
                type="text"
                id="sport"
                required
                onChange={(e) => handleChange("sport", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="player">Player:</label><br />
              <input
                className="border"
                type="checkbox"
                id="player"
                onChange={(e) => handleChange("player", e.target.checked)}
              />
            </div>
            <div className="flex">
              <input
                type="submit"
                value="Register!"
                className='button'
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
    </div>
  );
}

export default Register;