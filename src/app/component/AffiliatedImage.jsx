"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import getProducts from '../libs/getProducts';
import axios from 'axios';

const AffiliatedImage = ({img, id, affiliate}) => {

    const [productData,setProductData] = useState([]);
   
    useEffect(() => {
       async function getData(){
        const response = await getProducts();
        setProductData(response?.data?.data)
       }
       getData();
    })

    const handleCount = async (theId) => {
        
        const findProduct = productData?.find(f => {
            return f?._id === theId
        });

        const totalCount = findProduct?.clickPerCount + 1;

        const updateCount = {
            clickPerCount: totalCount
        }
        
        await axios.patch(`https://blogify-server.vercel.app/api/v1/product/${theId}`,updateCount);
       
    }

    return (
        <div className='flex' style={{ width:'220px', height:'170px', display:'block', margin:'auto'}}>
            <Link onClick={() => handleCount(id)} target='_blank' href={`${affiliate}`}>
                <Image src={img} height={170} width={220} alt=""></Image>
                
            </Link>
        </div>
    );
};

export default AffiliatedImage;