import React, { useState } from 'react';
import { HiPlus } from "react-icons/hi";
import './UploadImageModal.css';



const UploadImageModal = () => {
    // const [img, setImg] = useState('');
    const [inputs, setInputs] = useState({});


    const handleChange = (e) => {
        const id = e.target.id
        const [file] = e.target.files;
        setInputs(input => ({ ...input, [id]: URL.createObjectURL(file) }))
    };

    return (

        <div className="card bg-bgColor text-white">
            <div className="card-body modal-padding">
                <div className=' gap-5 text-6xl font-bold'>

                    <div className='grid grid-cols-4 gap-5 h-[450px]'>
                        {
                            new Array(12).fill('').map((src, i) => <div key={i} className='upload'>
                                <label className='image-label flex items-center justify-center' htmlFor={`inputTag${i}`}>
                                    {
                                        inputs[`inputTag${i}`] ? <img className='rounded-full w-20 h-20 object-cover' src={inputs[`inputTag${i}`]} alt="" /> : <HiPlus className='bg-bgPlusColor text-white rounded-full plus-button' />
                                    }
                                    <input onChange={handleChange} className='image-input' id={`inputTag${i}`} type="file" />
                                    <br />
                                    {/* <span id="imageName"></span> */}
                                </label>
                            </div>)
                        }
                    </div>


                    <div className="card-actions justify-center mt-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded-full">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadImageModal;