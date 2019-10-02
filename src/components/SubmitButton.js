import React from 'react';
import "./SubmitButton.css";

const SubmitButton = (props) => {

  const { formSend, handleStatusForm, validated } = props;

  const formTestPass = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };

  const handleSubmit = () => {

    if (formSend) {

      handleStatusForm("info")

    } else {

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
          if (validated) {
            handleStatusForm("success");

            // Console log left on purpose
            // Preview of receiving data
            console.log(data);
          }
        })
        .catch(err => {
          handleStatusForm("error");
          return err;
        })
    }
  }

  return (
    <button type="submit" className="form__btn" onClick={handleSubmit}>
      Login
      </button>
  );

}

export default SubmitButton;