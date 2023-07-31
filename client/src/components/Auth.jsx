import axios from "axios";
import { useState } from "react";

const Auth = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const[isSignUp, setIsSignUp] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const submitHandler = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, confirmPassword } = e.target;
    setUserData({
      ...(isSignUp && { firstName: firstname.value }),
      ...(isSignUp && { lastName: lastname.value }),
      email: email.value,
      password: password.value,
      ...(isSignUp && { confirmPassword: confirmPassword.value }),
    });
    if(isSignUp){
      axios.post(" http://localhost:5000/users/signup",JSON.stringify(userData),{headers:{"Content-Type":"application/json"}})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    } else {
      axios.post('http://localhost:5000/users/signin', userData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  };
  
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  }
      return (
        <form onSubmit={submitHandler} className="bg-white rounded-md shadow-md px-8 py-6">
        <h1 className="text-xl font-bold mb-4">{isSignUp ? 'Sign up' : 'Sign in'}</h1>
        {isSignUp && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                className="border-2 border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                className="border-2 border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-gray-400 rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="border-2 border-gray-400 rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm password"
              className="border-2 border-gray-400 rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
            />
          </>
        )}
        {!isSignUp && (
          <>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 border-gray-400 rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
          />
          <div className="flex items-center mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="border-2 border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleShowPassword}
            className="ml-2 px-3 py-2 bg-gray-100 rounded-md border-2 border-gray-400 hover:bg-gray-200 focus:outline-none"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        </>
        )}
       
        <button
  type="submit"
  className="bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-600"
>
  {isSignUp ? "Sign up" : "Sign in"}
</button>

<button
  onClick={switchMode}
  className="text-blue-500 hover:underline"
>
  {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
</button>

</form>

      
  );
};

export default Auth;