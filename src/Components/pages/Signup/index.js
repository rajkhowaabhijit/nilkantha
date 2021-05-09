import React, { useState } from "react";
import SigninForm from "./SignupForm";
import { Redirect } from "react-router-dom";
import {
  signUp,
  // authenticate,
  // isAuthenticated
} from "../../../Utils/Requests/Auth";

const SignUp = () => {
  const [state, setState] = useState({
    name:"",
    citizenshipNumber:"",
    phone:"",
    email: "",
    password: "",
    role: "",
    error: "",
    loading: false,
    submitted: false,
  });

  const { name, citizenshipNumber, phone, email, password, role, error, loading, submitted } = state;

  const handleChange = event => {
    setState({
      ...state,
      error: false,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setState({ ...state, error: false, loading: true });
    const data = await signUp({name, citizenshipNumber, phone, email, password, role }).catch(err => {
      setState({ ...state, error: err.response.data.error });
    });
    console.log(data);
    // if (data && data.status === 200) {
    //   authenticate(data, () => {
    //     if (isAuthenticated()) {
    //       setState({ ...state });
    //     }
    //   });
    // }
    setState({submitted:true})
  };

  const showError = () => <div className="alert alert-danger">{error}</div>;

  const showLoading = () => (
    <div className="alert alert-info">
      <h2>Loading...</h2>
    </div>
  );

  const redirectUser = () => <Redirect to="/signin" />;

  return (
    <div className="login-dark">
      {loading && showLoading()}
      {error && showError()}
      {!loading && (
        <SigninForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          state={state}
        />
      )}
      {submitted && redirectUser()}
    </div>
  );
};

export default SignUp;
