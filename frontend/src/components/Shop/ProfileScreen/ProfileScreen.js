import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Message from "../../Message.js";
import Loader from "../../Loader.js";
import { getUserDetails } from "../../../actions/userActions.js";

const ProfileScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userDetails);
  const { userInfo } = userLogin;
  let navigate = useNavigate();

  let params = useSearchParams();
  //   console.log(params);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setPassword(user.password);
      }
    }
  }, [dispatch, navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      //DISPATCH UPDATE PROFILE
    }
  };

  return (
    <div>
      <div className="Profile">
        <h2>User Profile</h2>
        {(error || message) && <Message>{message ? message : error}</Message>}

        {loading && <Loader />}
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input
            type="name"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Password Address</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>

          <button type="submit">Update</button>
        </form>
      </div>
      <div className="Orders">
        <h1>My Orders</h1>
      </div>
    </div>
  );
};

export default ProfileScreen;
