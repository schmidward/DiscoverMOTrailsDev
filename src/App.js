import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import "./App.css";
  
function App() {
  const {register, watch, handleSubmit, reset, formState: { errors } } = useForm();

  //Password watcher to see if the two values match up
  const pwd = useRef({});
  pwd.current = watch("pwd", "");

  const email =useRef({});
  email.current = watch("email", "")

  //Defining the password pattern we want: UPPERCASE, lowercase, numerals, specials
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onSubmit = (data) => {
    console.log(data); 
    reset(); // clear form
  };
    
  return (
    <>
      <p className="title">Registration Form</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
  <div className="form-row">
    <div className="form-labels">
      <div className="label-wrapper">
        <label htmlFor="username">Username:</label>
      </div>
      <div className="label-wrapper">
        <label htmlFor="email">Email:</label>
      </div>
      <div className="label-wrapper">
        <label htmlFor="password">Password:</label>
      </div>
      <div className="label-wrapper">
        <label htmlFor="verifyPwd">Verify Password:</label>
      </div>
    </div>
    <div className="form-inputs">
      <div className="input-wrapper">
        <input
          type="text"
          id="username"
          {...register("name", { required: true })}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="email"
          id="email"
          placeholder="name@example.com"
          {...register("email", { required: "An email is required" })}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          id="pwd"
          {...register("pwd", {
            required: "Password is required",
            pattern: {
              value: passwordPattern,
              message: "Password must have at least 8 characters, and upper and a lowercase letter ",
            },
          })}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          id="verifyPwd"
          {...register("verifyPwd", {
            validate: (value) =>
              value === pwd.current || "The passwords do not match",
          })}
        />
      </div>
    </div>
  </div>

  {errors.email && <span>{errors.Email.message}</span>}
  {errors.pwd && <span>{errors.pwd.message}</span>}
  {errors.verifyPwd && <span>{errors.verifyPwd.message}</span>}

  <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
</form>

    </>
  );
}
export default App;
