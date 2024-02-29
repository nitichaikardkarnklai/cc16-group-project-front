import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useState } from 'react';
import validateRegister from "../validations/validate-register"
import useAuth from '../../../hooks/use-auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const { register } = useAuth();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(c => { return { ...error, [e.target.name]: "" } })
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError)
      }

      // console.log("input: ", input);

      await register(input);

      toast.success("Register Successfully");

      navigate("/");
    } catch (err) {
      console.log("error: ", err);
      toast.error(err.response?.data.message);
    }
  };
  return (
    <div>

      <div className="  bg-white px-6 pb-5  ">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register</h2>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <Input
                  placeholder="email address"
                  value={input.email}
                  name="email"
                  onChange={handleChange}
                  errorMessage={error.email}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2.5">
                <Input
                  type="password"
                  placeholder="password"
                  value={input.password}
                  name="password"
                  onChange={handleChange}
                  errorMessage={error.password}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2.5">
                <Input
                  type="password"
                  placeholder="confirm password"
                  value={input.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  errorMessage={error.confirmPassword}
                />
              </div>
            </div>

          </div>
          <div className="mt-10 flex justify-center">
            <Button btn bg="red" type="submit" className="w-full" color="white">
              Create New Account
            </Button>
          </div>
        </form >
      </div >
    </div>
  )
}
