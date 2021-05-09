import React, { useState } from "react";
import {Link} from 'react-router-dom'

function SigninForm({ handleChange, handleSubmit, state }) {
  const [value, setValue] = useState({ hidden: true });
  // const [admin, setAdmin] = useState(null);
  // const [owner, setOwner] = useState(true);

  const toggleShow = () => {
    setValue({ hidden: !value.hidden });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* <div
        className="illustration"
        onClick={toggleShow}
        style={{ cursor: "pointer", color: "#ffff" }}
      >
        {value.hidden ? (
          <i className="fa fa-eye-slash" />
        ) : (
          <i className="fa fa-eye" />
        )}
      </div> */}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          value={state.name}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Citizen Ship Number"
          name="citizenshipNumber"
          onChange={handleChange}
          value={state.citizenshipNumber}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
          value={state.phone}
          required
        />
      </div>
      
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={state.email}
          required
        />
      </div>

      <div className="form-group">
        <input
          type={value.hidden ? "password" : "text"}
          className="form-control"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={state.password}
          required
        />
      </div>

      <div className="form-group check-group">
        <input
          type="checkbox"
          id="checkbox"
          onClick={toggleShow}
          checked={!value.hidden}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          Show password
        </label>
      </div>

      {/* <div className="form-group">
        <label htmlFor="select" className="checkbox-label">
          Select a Role :
        </label>
        <select name="role">
          <option value="superadmin">
            Super Admin
          </option>
          <option value="owner">
            Owner
          </option>
        </select>
      </div> */}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="role"
          name="role"
          onChange={handleChange}
          value={state.role}
          required
        />
      </div>

      <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </div>
      <div className="form-group">
        <Link to="/signin">Already have an account? Sign In</Link>
      </div>
    </form>
  );
}

export default SigninForm;
