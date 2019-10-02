import React from 'react';
import "./SubmitButton.css";

const SubmitButton = (props) => {

  const { handleSubmitForm } = props;

  const formTestPass = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (
      fetch("https://reqres.in/api/login", {
        method: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(formTestPass)
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw Error("Ooops... Something went wrong.")
        }
        )
        .then(data => {
          handleSubmitForm("success");

        })
        .catch(err => {
          handleSubmitForm("error");
          return err;
        })
    )
  }

  return (
    <button type="submit" className="form__btn" onClick={handleSubmit}>
      Login
      </button>
  );
}

export default SubmitButton;