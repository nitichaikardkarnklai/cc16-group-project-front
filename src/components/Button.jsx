import React from 'react';

const bgClass = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    gray: "bg-grayBg100 hover:bg-gray-400",
    yellow: "bg-amber-400 hover:bg-amber-600",
    none: "bg-none",
    red: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    black: 'bg-black hover:bg-gray-800 active:bg-gray-900',
};

const colorClass = {
    white: "text-white",
    black: "text-black",
};

const textPositionClass = {
    start: "justify-start"
}

const widthClass = {
    full: 'w-full'
};

export default function Button({ children, bg, color, width, onClick, textPosition }) {
    let classes = bg ? bgClass[bg] : '';
    classes += color ? ' ' + colorClass[color] : '';
    classes += width ? ' ' + widthClass[width] : '';
    classes += textPosition ? ' ' + textPositionClass[textPosition] : '';
    return (
        <button className={`btn border-none ${classes}`} onClick={onClick}>
            {children}
        </button>
    );
}