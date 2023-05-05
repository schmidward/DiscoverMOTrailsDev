import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import "./App.css";
  
function App() {
  const {register, watch, handleSubmit, reset, formState: { errors } } = useForm();
  
  //Password watcher to see if the two values match up
  const pwd = useRef({});
  pwd.current = watch("pwd", "");

  //Defining the password pattern we want: UPPERCASE, lowercase, numerals, specials
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onSubmit = (data) => {
    console.log(data); 
    reset(); // clear form
  };
    
  return (
    <>
      <p className="title">Registration Form</p>
  
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        
        <label>Username
        <input type="text" placeholder="name" {...register("name")} />
        </label>
        
        <label>Email:<input type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        </label>
        
        <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="pwd" {...register("pwd", {
          required: "Password is required",
          pattern: {
            value: passwordPattern,
            message: "Password must have at least 8 characters, and upper and a lowercase letter "
          }
        })} />
        {errors.pwd && <span>{errors.pwd.message}</span>}
      </div>
      <div>
          <label htmlFor="verifyPwd">Verify Password</label>
          <input
            type="password"
            id="verifyPwd"
            {...register("verifyPwd", {
              validate: (value) =>
                value === pwd.current || "The passwords do not match",
            })}
          />
          {errors.verifyPwd && <p>{errors.verifyPwd.message}</p>}
        </div>
        
        
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      
      
      </form>
    </>
  );
}
export default App;
