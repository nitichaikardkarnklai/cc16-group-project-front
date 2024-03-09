import React from 'react';

{
  /* <button
  className='btn'
  onClick={() => document.getElementById(`${id}`).showModal()}
></button>; */
}

export default function Modal({ id, children }) {
  return (
    <>
      <dialog id={`${id}`} className='modal'>
        <div className='modal-box flex flex-col justify-center items-center'>
          {children}
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
