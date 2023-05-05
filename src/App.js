import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import "./App.css";
  
function App() {
  const {register, watch, handleSubmit, formState: { errors } } = useForm();
  
  const pwd = useRef({});
  pwd.current = watch("password", "");

  const onSubmit = (data) => console.log(data);
    
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
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="verifyPassword">Verify Password</label>
        <input type="password" id="verifyPwd" {...register("verifyPwd", {
          validate: value => value === pwd.current || "The passwords do not match"
        })} />
        {errors.verifyPassword && <p>{errors.verifyPassword.message}</p>}
      </div>
        
        
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      
      
      </form>
    </>
  );
}
export default App;
