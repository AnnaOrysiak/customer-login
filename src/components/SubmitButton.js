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
          console.log(data);
          handleSubmitForm();
        })
        .catch(err => {
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