import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/router";
import { useGlobalState } from "../../context/GlobalState";

function Register() {
  const [state, dispatch] = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    userType: "athlete", // Default user type
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  async function handleRegister(e) {
    e.preventDefault();
    AuthService.register(user);
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
            <select
              id="userType"
              name="userType"
              onChange={(e) => handleChange("userType", e.target.value)}
              value={user.userType}
              required
            >
              <option value="athlete">Athlete</option>
              <option value="recruiter">Recruiter</option>
            </select>
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