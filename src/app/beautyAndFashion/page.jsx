import Image from 'next/image';
import React from 'react';
import bf from './beautyAndFashion.module.css';
import getProducts from '../libs/getProducts';
import AffiliatedImage from '../component/AffiliatedImage';
import getAllProducts from '../libs/getAllProducts';
import Link from 'next/link';

const BeautyAndFashion = async() => {

    const response = await getAllProducts();
    const getAllData = await response?.data?.data?.data;
   

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
                             <AffiliatedImage img={data?.img} id={data?._id} affiliate={data?.affiliateLink} />
                            <br />
                            <div style={{width:'220px', margin:'auto'}}>
                                <span style={{color:'white', backgroundColor:'red', padding:'2px 8px', borderRadius:'3px'}}> 30%</span>
                                <span style={{color:'red', marginLeft:'15px'}}>Deal</span>
                                <br />
                                <p style={{fontSize:'11px', marginTop:'5px', fontWeight:'bold'}}>$ <span style={{fontSize:'20px'}}>{data?.price}</span> </p>
                                <br />
                                <div dangerouslySetInnerHTML={{__html:data?.description?.slice(0, 50) }}></div>
                                <Link style={{textDecoration:'none'}} href={`/${data?.categories}/${data?._id}`}>...detail</Link>
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