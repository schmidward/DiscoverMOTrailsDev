const registrationSchema = {
    name: {
      label: "Username",
      type: "text",
      required: true,
      validation: {
        minLength: 3,
        maxLength: 20,
        pattern: /^[a-zA-Z0-9_-]*$/,
        message: {
          required: "Username is required",
          minLength: "Username must be at least 3 characters",
          maxLength: "Username cannot exceed 20 characters",
          pattern: "Username can only contain letters, numbers, hyphens and underscores"
        }
      }
    },
    email: {
      label: "Email",
      type: "email",
      required: true,
      validation: {
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: {
          required: "Email is required",
          pattern: "Invalid email address"
        }
      }
    },
    password: {
      label: "Password",
      type: "password",
      required: true,
      validation: {
        minLength: 8,
        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: {
          required: "Password is required",
          minLength: "Password must be at least 8 characters",
          pattern: "Password must contain at least one uppercase letter, one lowercase letter and one digit"
        }
      }
    },
    confirmPassword: {
      label: "Confirm Password",
      type: "password",
      required: true,
      validation: {
        validate: (value, values) => value === values.password,
        message: "Passwords do not match"
      }
    }
  };
  