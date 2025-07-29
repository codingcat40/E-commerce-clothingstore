import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) =>  {
        try {
            e.preventDefault();
            // console.log(email, password);

            
        } catch (error) {
            console.log(error)
        }
  }


  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadown-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium tex-gray-700 mb-2">Email Address</p>
            <input
              onChange={(e) =>setEmail(e.target.value)}
              value={email}
              className="rounded w-full px-3 py-2 border border-gray-300 outline"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium tex-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded w-full px-3 py-2 border border-gray-300 outline"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="cursor-pointer mt-2 w-full px-4 py-2 rounded-md text-white bg-black" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
