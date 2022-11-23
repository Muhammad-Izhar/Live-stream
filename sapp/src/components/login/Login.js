import style from "./style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    // const response = await fetch("url", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // let data = await response.json();
    // console.log(data);
    // localStorage.setItem("Auth", JSON.stringify(data.success.token));
    navigate("/home");
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={submitHandler}>
        <h1 className="text-5xl mx-auto text-[#17a2b8]">Login</h1>
        <div className={style.emailElement}>
          <label
            htmlFor="email"
            className="text-[#17a2b8] text-lg font-semibold"
          >
            Username:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={style.input}
          />
        </div>
        <div className={style.emailElement}>
          <label htmlFor="password" className="text-[#17a2b8] font-semibold">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={style.input}
          />
        </div>
        <div className="flex gap-3 flex-row items-baseline ml-28">
          <label htmlFor="checkbox" className="text-[#17a2b8] text-xl">
            remember me?
          </label>
          <input type="checkbox" />
        </div>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
