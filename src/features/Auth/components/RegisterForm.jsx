import React from 'react';
export default function RegisterForm() {
  const handleSubmit = (e) => {
    e.target.preventDefault();
  }
  return (
    <div>
      return (
      <div className="  bg-white px-6 py-5  ">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">สมัครสมาชิก</h2>

        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                ชื่อ
              </label>
              <div className="mt-2.5">
                <input
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                นามสกุล
              </label>
              <div className="mt-2.5">
                <input
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2.5">
                <input
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                เบอร์โทร
              </label>
              <div className="relative mt-2.5">
                <input>
                </input>
              </div>
            </div>
          </div>
          <div className="mt-10 items-center">
            <button type="submit" className="w-full" >
              สมัครสมาชิก
            </button>
          </div>
        </form >
        <button type="submit" className="w-full" >
          ย้อนกลับ
        </button>
      </div >
      )
    </div>
  )
}
