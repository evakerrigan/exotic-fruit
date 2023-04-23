import "./Authorization.css";
import { useState } from "react";
import usersData from "../../json/users.json";

export const Authorization = () => {

  const [userLoginInput, setUserLoginInput] = useState("");
  const [userPasswordInput, setUserPasswordInput] = useState("");

  const password = document.querySelector('.authorization-input.password');
  const loginInput = document.querySelector('.authorization');
  const loginOk = document.querySelector('.authorization-ok');

  for (let i=0; i<usersData.length; i++) {
    if ( usersData[i].login === userLoginInput) {
      password?.classList.add('active-password');
      if ( usersData[i].password === userPasswordInput) {
        console.log('пароль совпал');
        loginInput?.classList.add('display-none');
        loginOk?.classList.add('display-block');
      }
    } else {
      // if (password.classList.contains('active-password')) {
      //   password.classList.remove('active-password');
      // }
    }
  }


  return (
    <div className="wrapper-authorization">
      <div className="authorization">
        <input
          className="authorization-input login"
          placeholder="Ваш логин"
          onChange={(event) => {
            setUserLoginInput(event.target.value);
          }}
          value={userLoginInput}
         />
        <input
          className="authorization-input password"
          placeholder="Ваш пароль"
          onChange={(event) => {
            setUserPasswordInput(event.target.value);
          }}
          value={userPasswordInput}
         />
      </div>
      <div className="authorization-ok">
        {userLoginInput}
      </div>
    </div>
  );
};
