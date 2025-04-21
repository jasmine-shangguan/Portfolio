import React from 'react';

import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed,
  } from "react-icons/rx";


const Footer = () => {

    const getPeepoCount = (): number => {
        const stored = localStorage.getItem('peepoCount');
        return stored ? parseInt(stored, 10) : 0;
      };
      
      const [count, updateCount] = React.useState<number>(getPeepoCount());
      
      const updatePeepoCount = () => {
        const newCount = getPeepoCount() + 1;
        localStorage.setItem('peepoCount', newCount.toString());
        updateCount(newCount);
      };      

  return (
    <div className='duration-200 w-full h-full bg-transparent shadow-lg p-[15px] z-50'>
         <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                <div
                className='min-w-[200px] h-auto flex flex-col items-center justify-start gap-2'
                >
                    <div className='font-bold text-[18px] text-gray-200' >Community</div>
                    
                    <a
                    href={"https://github.com/jasmine-shangguan"} target="_blank"
                    className='flex flex-row items-center my-[15px] cursor-pointer text-gray-200 hover:text-[#F6F0F0] duration-200'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px] cursor-pointer'>GitHub</span>
                    </a>

                    <a
                    href={"https://www.linkedin.com/in/jasmine-shangguan"} target="_blank"
                    className='flex flex-row items-center my-[15px] cursor-pointer text-gray-200 hover:text-[#F6F0F0] duration-200'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                    </a>
                    
                </div>

                <div
                    className='min-w-[200px] h-auto flex flex-col items-center justify-start gap-2'
                >
                    <div className='font-bold text-[16px] text-gray-200' >About</div>
                    <a
                    href="mailto:jasmine.shangguan@gmail.com" target="_blank"
                    className='flex flex-row items-center my-[15px] cursor-pointer text-gray-200 hover:text-[#F6F0F0] duration-200'>
                        <RxEnvelopeClosed />
                        <span className='text-[15px] ml-[6px]'>Email</span>
                    </a>
                </div>
            </div>

            <div style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
                <span style={{fontSize: "0.8rem", color: "#F5EFFF",}}>You clicked {count} times</span> <br/>
                <button style={{
                    fontSize: "0.8rem", 
                    marginLeft: "20px",
                    marginTop: "6px",
                    padding: "6px 12px", 
                    borderRadius: "8px",
                    border: "none", 
                    backgroundColor: "#C4D9FF", 
                    color: "#FDF7F4", 
                    cursor: "pointer",
                    }}  
                    onClick={() => updatePeepoCount()}> Easter Egg </button>
            </div>

        </div>
    </div>
  )
}

export default Footer
