import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../hooks/useAuth.jsx";

import Input from "../components/custom/Input.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (event) =>
    setData((prev) => ({ ...prev, [event.target.id]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {
      email: !data.email.trim(),
      password: !data.password.trim(),
    };

    if (newErrors.email || newErrors.password) {
      toast.error("Both fields are required!");
      return setErrors({ ...newErrors });
    }

    if (
      data.email.trim().toLowerCase() !== "demo@formbuilder.com" ||
      data.password.trim() !== "Demo@123"
    ) {
      toast.error("Invalid credentials!");
      return setErrors({ email: true, password: true });
    }

    setAuth({ email: data.email });
    navigate("/", { replace: true });
  };

  const handleDemoAccess = () => {
    setAuth({ email: "demo@formbuilder.com" });
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      {/* Top-left corner heading */}
      <div className="text-3xl font-extrabold p-7 text-neutral-900">Form Builder</div>
      {/* Centered login box */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full md:w-1/2 p-2">
          <div className="w-4/5 mx-auto bg-neutral-200 rounded-xl p-7">
            {/* Box title */}
            <div className="text-2xl font-extrabold text-center mb-6">Welcome</div>
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <Input
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                  size="lg"
                  value={data.email}
                  onChange={handleChange}
                  isInvalid={errors.email}
                  mandatory={true}
                />
              </div>
              <div className="mt-5">
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  size="lg"
                  value={data.password}
                  onChange={handleChange}
                  isInvalid={errors.password}
                  mandatory={true}
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full rounded-md bg-neutral-900 hover:bg-neutral-950 disabled:bg-neutral-700 text-white py-2 px-2"
                >
                  Sign in to your account
                </button>
              </div>
            </form>
            <div className="mt-5">
              <button
                type="button"
                className="w-full rounded-md bg-violet-600 hover:bg-violet-700 text-white py-2 px-2"
                onClick={handleDemoAccess}
              >
                Demo Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
