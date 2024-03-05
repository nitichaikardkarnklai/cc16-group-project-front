import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ProductEdit from './ProductEdit';


export default function ProductManageEdit() {
    const [selectedImage, setSelectedImage] = useState('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8');
    const smallImages = [
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8',
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8',
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8'
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <div>
                <div className="hero h-full ">
                    <div className=" text-center ">
                        <div className="flex ">
                            <div class="w-full lg:w-1/2  mb-16 lg:mb-0">
                                <div className="lg:flex lg:justify-start lg:gap-1">
                                    <div className="lg:order-2 flex flex-col justify-center w-auto">
                                        <div className="">
                                            <img className="h-full w-full max-w-full object-cover" src={selectedImage} alt="" />
                                        </div>
                                    </div>
                                    <div className=" w-full">
                                        <div className="flex flex-row items-start lg:flex-col">
                                            {smallImages.map((image, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden border-2 border-gray-200 text-center"
                                                    onClick={() => handleImageClick(image)}
                                                >
                                                    <img className="h-full w-full object-cover" src={image} alt="" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2 px-2">
                                <details className="collapse rounded-none w-full first-line: ">
                                    <summary className="collapse-title text-xl font-medium  bg-slate-100">EDIT</summary>
                                    <div className="collapse-content">
                                        <ProductEdit />
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
