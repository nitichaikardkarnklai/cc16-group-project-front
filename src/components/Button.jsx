import React from 'react';

const bgClass = {
    red: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    black: 'bg-black hover:bg-gray-800 active:bg-gray-900',
};

const colorClass = {
    white: 'text-white'
};

const widthClass = {
    full: 'w-full'
};

export default function Button({ children, bg, color, width, onClick }) {
    let classes = bg ? bgClass[bg] : '';
    classes += color ? ' ' + colorClass[color] : '';
    classes += width ? ' ' + widthClass[width] : '';
    return (
        <button className={`px-4 py-3  ${classes}`} onClick={onClick}>
            {children}
        </button>
    );
}