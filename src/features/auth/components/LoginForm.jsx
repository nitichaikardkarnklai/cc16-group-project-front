import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import validateLogin from "../validations/validate-login";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function LoginForm() {
  const { login, authUser } = useAuth();
  const [error, setError] = useState({});

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      const validationError = validateLogin(input);
      if (validationError) {
        return setError(validationError);
      }
      await login(input);

      navigate("/")
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-[60%]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Log in to ToyMart</h1>
          </div>
          <div className="card shrink-0 w-full mt-5 shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Input
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  value={input.email}
                  onChange={handleChangeInput}
                  errorMessage={error.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Input
                  value={input.password}
                  name="password"
                  placeholder="password"
                  type="password"
                  className="input input-bordered"
                  onChange={handleChangeInput}
                  errorMessage={error.password}
                />
              </div>
              <Button bg="red" type="submit" color="white" onClick={handleSubmit}>
                Login
              </Button>
            </form>
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Create New Account</button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-8/12 max-w-4xl m-auto p-0">
                <div className="modal-action m-auto">
                  <form method="dialog" className="">
                    <button className="my-4 mx-8">&#x2715;</button>
                  </form>
                </div>
                <RegisterForm />
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
