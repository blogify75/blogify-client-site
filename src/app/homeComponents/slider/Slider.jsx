"use client"
import React, { useEffect, useRef, useState } from 'react';
import slider from './Slider.module.css';
import Image from 'next/image';

const Slider = ({dealsProduct}) => {
    const [pause, setPause] = useState(false);

    const parentRef = useRef(null);
    useEffect(() => {

        if(dealsProduct?.length < 6){
            setPause(true)
        }

        // console.log(dealsProduct.lenght)

        
        let parentElement = parentRef.current;

        // Function to scroll the parent div horizontally
        const scrollHorizontally = () => {
            if (pause) {
                parentElement.scrollLeft += 0;
            } else {
                parentElement.scrollLeft += 1;
            }
            // console.log(parentElement.scrollWidth)
            // console.log(parentElement.scrollLeft + parentElement.clientWidth)


            if ((parentElement.scrollLeft + parentElement.clientWidth) + 1 === parentElement.scrollWidth) {
                parentElement.scrollLeft = 0; // Reset the scroll position to the beginning
            }
        };

        // Start the interval to scroll the parent div horizontally
        let interval = setInterval(scrollHorizontally, 20); // Adjust the interval duration as needed
        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, [pause, dealsProduct]);

    return (
        <div
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        className={slider.parent} ref={parentRef}>
        <div  className={slider.child}>
      
            {
                dealsProduct?.slice(0, 12)?.map(data => {
                    return (
                        <div className={`${slider.productsMain}`} key={data?.id}>
                            <div style={{backgroundColor:'lightGray', width:'220px', height:'170px'}}>
                               <Image src={data?.img} height={180} width={220} alt=""></Image>
                            </div>
                            <br />
                            <span style={{color:'white', backgroundColor:'red', padding:'2px 8px', borderRadius:'3px'}}> 30%</span>
                            <span style={{color:'red', marginLeft:'15px'}}>Deal</span>
                            <br />
                            <p style={{fontSize:'11px', marginTop:'5px', fontWeight:'bold'}}>$ <span style={{fontSize:'20px'}}>{data?.price}</span> </p>
                            <br />
                            <div dangerouslySetInnerHTML={{__html:data?.description?.slice(0, 50) }}></div>
                        </div>
                    )
                })
            }
        </div>
       
    </div>
    );
};

export default Slider;