import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Message from "../../Message.js";
import Loader from "../../Loader.js";
import { login } from "../../../actions/userActions.js";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //   const redirect = location.search ? location.search.split('=')[1] : '/'
  let redirect = null;
  let navigate = useNavigate();

  let params = useSearchParams();
  console.log(params);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    //DISPATCH LOGIN
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Sign In</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
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

        <button type="submit">Sign In</button>
      </form>

      <h1>
        {" "}
        New Customer ? <Link to={"/register"}> Register</Link>
      </h1>
    </div>
  );
};

export default LoginScreen;
