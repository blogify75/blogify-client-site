import React from 'react';
import deal from './Deal.module.css';
import Image from 'next/image';

const Deals = async() => {
    const url = `https://blogify-server.vercel.app/api/v1/product` ;

    const response = await fetch(url, {
      cache: "no-store"
    });
    const data = await response.json();
    const getAllData = await data?.data?.data;

  

    return (
        <div className={`${deal.main}`}>
           <div className={`${deal.container}`} >
            {
                getAllData?.map(data => {
                    return (
                        <div className={`${deal.productsMain}`} key={data?.id}>
                            <div className='flex' style={{ width:'220px', height:'170px', display:'block', margin:'auto'}}>
                                <Image src={data?.img} height={170} width={220} alt=""></Image>
                            </div>
                            <br />
                            <div style={{width:'220px', margin:'auto'}}>
                                <span style={{color:'white', backgroundColor:'red', padding:'2px 8px', borderRadius:'3px'}}> 30%</span>
                                <span style={{color:'red', marginLeft:'15px'}}>Deal</span>
                                <br />
                                <p style={{fontSize:'11px', marginTop:'5px', fontWeight:'bold'}}>$ <span style={{fontSize:'20px'}}>{data?.price}</span> </p>
                                <br />
                                <div dangerouslySetInnerHTML={{__html:data?.description?.slice(0, 50) }}></div>
                            </div>
                        </div>  
                    )
                })
            }            
           </div>
        </div>
    );
};

export default Deals;