import React from 'react';
import Avatar from '../../assets/default-avatar.png';

export default function ChatEnd({ textObj, children }) {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          {/* <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <img src={Avatar} />
        </div>
      </div>
      <div className='chat-header flex gap-2 items-center'>
        <div>{textObj.userName}</div>
        <time className='text-xs opacity-50'>{textObj.time}</time>
      </div>
      <div className='chat-bubble bg-redHero'>{children}</div>
      <div className='chat-footer opacity-50'>{textObj.date}</div>
    </div>
  );
}
