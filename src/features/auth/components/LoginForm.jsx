import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
// import validateLogin from "../validators/validateLogin"; // นำเข้าฟังก์ชันตรวจสอบข้อมูล
import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  // const { login, authUser } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateLogin(input);
      await login(input);
      if (authUser) {
        navigate('/')
      }


    } catch (error) {
      toast.error("เข้าสู่ระบบไม่สำเร็จ");
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };




  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">เข้าสู่ระบบ</h1>
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
                />
              </div>
              <Button bg="red" type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </form>
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>สมัครสมาชิก</button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-8/12 max-w-4xl m-auto p-0">
                <RegisterForm />
                <div className="modal-action m-auto">
                  <form method="dialog" className=" ">
                    <button className="btn px-8">ปิด</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
