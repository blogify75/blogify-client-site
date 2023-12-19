"use client"
import React, { useEffect, useState } from 'react';
import searchField from './SearchField.module.css';
import getBlogs from '@/app/libs/getBlogs';
import getProducts from '@/app/libs/getProducts';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';

const SearchField = () => {
    const [product, setProduct] = useState([]);
    const [blog, setBlog] = useState([]);
    const [search, setSearch] = useState('');
   

    useEffect(() => {
        const getBlogData = async () => {
            const response = await getBlogs(search);
            const data = response
            setBlog(data)
        }
        const getProductData = async () => {
            const response = await getProducts(search);
            const data = response
            setProduct(data)
        }
        getBlogData()
        getProductData()

    },[search])

    return (
       <div className={`${searchField.main}`}>
            <div className={`${searchField.search} flex_end`}>
                <div className={`${searchField.inputContainer} `}>
                        <div className={` ${searchField.searchSymbol} flex `}>
                            <IoSearch />
                        </div>
                        <input placeholder='Search' type="text" name="" id="" className={` ${searchField.introInput}`}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                </div>
            </div>
           
            <br /><br /><br />
            {
                search &&
                <div className={`${searchField.searchResult}`}>
                    <div style={{width:'85%', margin:'auto', border:'1px solid gray', padding:'5px', height:'400px', overflowX:'hidden', overflowY:'scroll', marginTop:'30px'}}>
                        {blog?.data?.data?.data?.length > 0 && <h6 style={{backgroundColor:'lightgray', padding:'5px'}}>blogs: {blog?.data?.data?.data?.length}</h6>}
                        {
                            blog?.data?.data?.data?.map(data => {
                                return (
                                    <div
                                     style={{
                                        marginBottom: '30px'
                                    }} key={data?._id}>
                                        <Link href={`/blogs/${data?._id}`}><h5 style={{margin:'0', padding:'0'}} >{data?.title}</h5></Link>
                                        <p style={{fontSize:'12px'}}>{data?.sub_title}</p>
                                    </div>
                                )
                            })
                        }

                        {product?.data?.data?.data?.length > 0 && <h6 style={{backgroundColor:'lightgray', padding:'5px',}}>products: {product?.data?.data?.data?.length}</h6>}
                        {
                            product?.data?.data?.data?.map(data => {
                                return (
                                    <div style={{
                                        marginBottom: '30px'
                                    }} key={data?._id}>
                                        <span style={{fontWeight:'bold', fontStyle:'italic', fontSize:'13.5px'}} ><Link href={`/${data?.categories}/${data?._id}`}>{data?.title}</Link> <span style={{color:'gray', fontSize:'12px', marginLeft:'30px'}}>({data?.categories})</span> </span>
                                        <p style={{fontSize:'12px'}}>{data?.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
       </div>
    );
};

export default SearchField;