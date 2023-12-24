"use client"
import nav from './Navbar.module.css';
import logo from '../../../images/blogify-new.png';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
    const [open , setOpen] = useState(false);
    return (
       <div onClick={() => setOpen(false)}>
         <div className={`${nav.main}`}>
            <div className={`${nav.container}`}>
                <div className={`${nav.left}  flex`}>
                    <Image src={logo} width={200} height={80} alt='blogify' />
                </div>
                <div className={`${nav.middle}  flex  `}>
                    <div className={`${nav.middleContainer} flex `}>
                        <ul className={`only_flex`}>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href='/'>HOME</Link>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href=''>ABOUT US</Link>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href='/deals'>DEALS & SHOPPING</Link>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href='/blogs'>BLOGS</Link>
                        </ul>
                    </div>
                </div>
                <div className={`${nav.right}  flex`}>
                    <div  className={`${nav.rightContainer}  flex_around`}>
                            <button className={`${nav.signIn} flex`}>
                                <Link style={{textDecoration:'none', color:'black'}} href='https://dashboard.blogify.life/' target='__blank'>
                                    SIGN IN
                                </Link>
                            </button>
                            <button className={`${nav.signUp} flex`}>
                                <Link style={{textDecoration:'none', color:'black'}} href='https://dashboard.blogify.life/signup' target='__blank'>
                                    SIGN UP
                                </Link>
                            </button>
                    </div>
                </div>
            </div>
            <div className={`${nav.containerRes}`}>
                <div className={`${nav.leftRes}  flex`}>
                    <Image src={logo} width={180}  alt='blogify' />
                </div>
                <div style={{position:'relative'}} className={`${nav.middleRes}  flex_end  `}>
                    <div className={`${nav.middleContainerRes} flex `}>
                        <p style={{cursor:'pointer'}} onClick={(e) => {
                            e.stopPropagation();
                            setOpen(!open)
                        }}>< RxHamburgerMenu /></p>
                    </div>
                    <div style={{
                        width:'200px',
                        height:'300px',
                        backgroundColor:'rgba(27, 27, 27, 0.91)',
                        borderRadius:'10px',
                        position:'absolute',
                        top:'80px',
                        right:'70px',
                        zIndex:'14',
                        padding:'0 10px',
                        display: `${open ? 'block': 'none'}`
                    }}>
                         <ul>
                            <Link style={{textDecoration:'none', color:'white', marginRight:'25px', fontSize:'13px'}} href='/'>HOME</Link>
                            <br />
                            <br />
                            <Link style={{textDecoration:'none', color:'white', marginRight:'25px', fontSize:'13px'}} href=''>ABOUT US</Link>
                            <br />
                            <br />
                            <Link style={{textDecoration:'none', color:'white', marginRight:'25px', fontSize:'13px'}} href='/deals'>DEALS & SHOPPING</Link>
                            <br />
                            <br />
                            <Link style={{textDecoration:'none', color:'white', marginRight:'25px', fontSize:'13px'}} href='/blogs'>BLOGS</Link>
                            <hr />
                            <br />
                            <Link style={{textDecoration:'none', color:'white', marginRight:'25px', fontSize:'13px'}} href='https://dashboard.blogify.life/' target='__blank'>SIGN IN</Link>
                            <br />
                            <br />
                            <Link style={{textDecoration:'none', color:'white', marginRight:'25px', fontSize:'13px'}}  href='https://dashboard.blogify.life/signup' target='__blank'>SIGN UP</Link>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        <div className={`${nav.footer}`}>
            <div className={`${nav.footerContainer}`}>
                <div>
                <Link style={{textDecoration:'none', color:'white'}} href="/blogs">Latest Blogs</Link>
                </div>
                <div>
                <Link style={{textDecoration:'none', color:'white'}} href="/personalCare">Personal Care</Link>
                </div>
                <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/beautyAndFashion">Beauty & Fashion</Link>
                </div>
                <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/petLife">Pet life</Link>    
                </div>
                <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/video">Social</Link>    
                </div>
                <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/kidsProducts">Kids Products</Link>
                </div>
                <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/deals">Latest Deals</Link>
                </div>
            </div>
            <div className={`${nav.footerContainerRes}`}>
               <div>
                <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/blogs">Latest Blogs</Link>
                    </div>
                    <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/personalCare">Personal Care</Link>
                    </div>
                    <div>
                        <Link style={{textDecoration:'none', color:'white'}} href="/beautyAndFashion">Beauty & Fashion</Link>
                    </div>
               </div>
                <div>
                    <div>
                        <Link style={{textDecoration:'none', color:'white'}} href="/petLife">Pet life</Link>    
                    </div>
                    <div>
                        <Link style={{textDecoration:'none', color:'white'}} href="/video">Social</Link>    
                    </div>
                    <div>
                        <Link style={{textDecoration:'none', color:'white'}} href="/kidsProducts">Kids Products</Link>
                    </div>
                </div>
                <div>
                    <Link style={{textDecoration:'none', color:'white'}} href="/deals">Latest Deals</Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Navbar;