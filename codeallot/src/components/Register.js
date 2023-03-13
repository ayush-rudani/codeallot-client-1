import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "./API";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
    cpassword: "",
    name: "",
    linkedin: "",
    github: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password !== state.cpassword) {
      toast.error("Passwords do not match");
    } else if (
      !state.email ||
      !state.password ||
      !state.cpassword ||
      !state.name
    ) {
      toast.error("Please fill all the fields");
    } else {
      Signup(
        state.email,
        state.password,
        state.name,
        state.linkedin,
        state.github
      )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            const { registerUser, token } = res.data;
            const { id, email, name, linkedin, github } = registerUser;
            localStorage.setItem("token", token);
            localStorage.setItem(
              "user",
              JSON.stringify({ id, email, name, linkedin, github })
            );

            toast.success("Registration Successful");
            navigate("/");
          } else {
            toast.error("Registration Failed");
            toast.error(res.response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-sm p-4 mx-auto sm:p-6 md:p-8 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-5" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Register to CodeAllot
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={state.email}
              onChange={handleInputs}
              type="email"
              name="email"
              id="email"
              className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              value={state.name}
              onChange={handleInputs}
              type="text"
              name="name"
              id="name"
              className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Jhon Martin"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              value={state.password}
              onChange={handleInputs}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cpassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              value={state.cpassword}
              onChange={handleInputs}
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="••••••••"
              className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className=" px-5 py-2.5 w-full mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
