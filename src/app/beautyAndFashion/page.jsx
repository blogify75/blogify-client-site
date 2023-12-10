import Image from 'next/image';
import React from 'react';
import bf from './beautyAndFashion.module.css';
import getProducts from '../libs/getProducts';

const BeautyAndFashion = async() => {

    const response = await getProducts();
    const getAllData = await response?.data?.data;

    const bfData = getAllData?.filter(f => {
        return f?.categories === 'beautyAndFashion';
    })
  

    return (
        <div className={`${bf.main}`}>
           <div className={`${bf.container}`} >
            {
                bfData?.map(data => {
                    return (
                        <div className={`${bf.productsMain}`} key={data?.id}>
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

}

export default BeautyAndFashion;