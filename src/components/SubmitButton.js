import React from 'react';
import "./SubmitButton.css";

const SubmitButton = (props) => {

  const { formSend, handleStatusForm, login, handleLogin, validated } = props;

  const formTestPass = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };

  const handleSubmit = () => {

    if (formSend && login) {

      handleStatusForm("info")

    } else {
      if (validated) {

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

            handleStatusForm("success");

            // Console log left on purpose
            // Preview of receiving data
            console.log(data);
            handleLogin();

          })
          .catch(err => {
            handleStatusForm("error");
            return err;
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