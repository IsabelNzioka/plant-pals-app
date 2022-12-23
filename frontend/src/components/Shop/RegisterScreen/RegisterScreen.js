import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Message from "../../Message.js";
import Loader from "../../Loader.js";
import { register } from "../../../actions/userActions.js";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  //   const redirect = location.search ? location.search.split('=')[1] : '/'
  let redirect = null;
  let navigate = useNavigate();

  let params = useSearchParams();
  //   console.log(params);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    //DISPATCH REGISTER
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
      // dispatch(login(email, password));
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
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

        <button type="submit">Register</button>
      </form>

      <h1>
        {" "}
        Have an Account ? <Link to={"/login"}> Login</Link>
      </h1>
    </div>
  );
};

export default RegisterScreen;
