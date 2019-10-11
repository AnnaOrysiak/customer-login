import React from 'react';
import "./SubmitButton.css";

const baseURL = "https://reqres.in/api/login";

const formTestPass = {
  email: "eve.holt@reqres.in",
  password: "cityslicka"
};

const formFetch = async () => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formTestPass)
  };

  try {
    const fetchResponse = await fetch(`${baseURL}`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (error) {
    return error;
  }

}

const SubmitButton = (props) => {

  const { formSend, handleStatusForm, login, handleLogin, validated } = props;
  const handleSubmit = () => {

    if (formSend && login) {
      handleStatusForm("info");
    } else {
      if (validated) {
        formFetch()
          .then(data => {
            handleStatusForm("success");

            // Console log left on purpose
            // Preview of receiving data
            console.log(`token: ${data.token}`);
            handleLogin();
          })
      }
    }
  }

  return (
    <button type="submit" className="form__btn" onClick={handleSubmit}>
      Login
      </button>
  );

}

export default SubmitButton;