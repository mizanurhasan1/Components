import React, { useEffect, useState } from 'react';
import { BsUpload } from 'react-icons/bs';

const UploadLogo = () => {
    const [inputs, setInputs] = useState({});
    const [screenSize, setScreenSize] = useState(768);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenSize(window.screen.width);
        });
    }, []);


    const handleLogo = (e) => {
        const id = e.target.id
        const [file] = e.target.files;
        setInputs(input => ({ ...input, [id]: URL.createObjectURL(file) }))
    }
    return (
        <div className=" w-full text-txtSecondColor md:justify-center sm:justify-center lg:justify-center flex ">
            {
                new Array(screenSize >= 768 ? 5 : 2).fill('').map((src, i) => <div key={i}>
                    <label htmlFor={`dropzone-files${i}`} className="m-2 flex flex-col justify-center items-center w-24 h-24 bg-[#272727] rounded-lg border-2 border-txtSecondColor border-dashed cursor-pointer">
                        {inputs[`dropzone-files${i}`] ?
                            <img className=' w-24 h-24  object-cover' src={inputs[`dropzone-files${i}`]} alt="" /> :
                            <div>
                                <p className="text-[1.2rem] ml-7  mt-5 mb-3 "><BsUpload /></p>
                                <p className='text-xs'>Upload logo</p>
                            </div>
                        }
                        <input onChange={handleLogo} id={`dropzone-files${i}`} type="file" className="hidden" />
                    </label>
                </div>)
            }
        </div>

    );
};

export default UploadLogo;