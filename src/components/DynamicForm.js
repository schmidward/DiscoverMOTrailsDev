import React from 'react';
import { useForm } from 'react-hook-form';
import "./components/DynamicForm.css"

function DynamicForm({ model }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(model).map((key) => {
        const { type, label, required } = model[key];
        return (
          <div key={key}>
            <label>{label}</label>
            {type === 'text' && (
              <input type="text" {...register(key, { required })} />
            )}
            {type === 'email' && (
              <input type="email" {...register(key, { required })} />
            )}
            {errors[key] && <span>This field is required</span>}
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
