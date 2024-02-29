import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
export default function MyAddressPage() {
  const handleSubmit = (e) => {
    e.target.preventDefault();
  }
  return (
    <div>

      <div className="  bg-white px-8 py-10  ">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ADD ADDRESS</h2>

        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div>

              <div className="mt-2.5">
                <Input
                  placeholder={"*First Name"}
                />
              </div>
            </div>
            <div>

              <div className="mt-2.5">
                <Input
                  placeholder={"*Last Name"}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input
                  placeholder={"*Phone Number"}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input
                  placeholder={"*Address"}
                />
              </div>
            </div>


            <div className="sm:col-span-2">
              <div className=" mt-2.5">
                <Input placeholder={"Apartment, suite, etc."} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="relative mt-2.5">
                <Input placeholder={"*City/ward/town/village"} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="relative mt-2.5">
                <Input placeholder={"*Province/State"} />
              </div>
            </div>
          </div>
          <div className="mt-10 items-center">
            <Button btn bg="red" color="white" type="submit" className="w-full" >
              SAVE
            </Button>
          </div>
        </form >
      </div >
    </div>
  )
}
