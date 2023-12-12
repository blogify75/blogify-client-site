
import React from 'react';
import pet from './random.module.css';
import Link from 'next/link';
import AffiliatedImage from '../component/AffiliatedImage';
import getAllProducts from '../libs/getAllProducts';

const PetLife = async() => {

    const response = await getAllProducts();
    const getAllData = await response?.data?.data?.data;

    const bfData = getAllData?.filter(f => {
        return f?.categories === 'random';
    })
  

    return (
        <div className={`${pet.main}`}>
           <div className={`${pet.container}`} >
            {
                bfData?.map(data => {
                    return (
                        <div className={`${pet.productsMain}`} key={data?.id}>
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

export default PetLife;