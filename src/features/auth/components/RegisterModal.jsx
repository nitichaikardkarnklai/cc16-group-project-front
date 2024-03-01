import React from 'react'
import RegisterForm from './RegisterForm'

export default function RegisterModal() {
    return (
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
    )
}
