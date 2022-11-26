import "./Autorization.css";
import { useState } from "react";
import { usersData } from "../../json/users.json";

export const Autorization = (
  // {usersData: {login, password, avatarUrl}}
props
  ) => {
  const [userInput, setUserInput] = useState("");

  console.log('props.login =', props.login);
  console.log('userInput =', userInput);

if (props.login === userInput) {
  console.log('такой пользователь есть, давайте вводить пароль');
}

  return (
    <div className="wrapper-autorization">
      <div className="autorization">
        <input
          className="autorization-input"
          placeholder="Ваш логин"
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
          value={userInput}
        ></input>
      </div>
    </div>
  );
};
