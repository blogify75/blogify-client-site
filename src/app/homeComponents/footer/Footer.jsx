import footer from './Footer.module.css';
import blogify from '../../../images/blogifyWhite.png';
import arrow from '../../../icons/arrowfooter.png';
import facebook from '../../../icons/facebook.png';
import insta from '../../../icons/insta.png';
import tube from '../../../icons/tube.png';
import Image from 'next/image';
import bg from '../../../images/footer.png';
const Footer = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${bg.src})`,
        }}
        className={`${footer.main}`}>
            <div className={`${footer.container}`}>
                <div className={`${footer.sub_container} only_flex`}>
                    <div className={`${footer.one} `}>
                        <p>Stay</p>
                        <p>Connected</p>
                        <div className={footer.withAndBlogify}><p>With</p> <p className={footer.blogifyImg}><Image src={blogify} alt="" /></p> </div>
                        <br />
                        <div style={{width:'100px', padding:'5px', borderRadius:'20px', backgroundColor:'white', cursor:'pointer'}} className={`${footer.btn} flex_between`}>
                            <span style={{paddingLeft:'10px', fontWeight:'bold'}}>Sign In</span>
                            <div style={{width:'30px', height:'30px', borderRadius:'50%', backgroundColor:'red'}} className='flex'>
                                <Image style={{width:'55%'}} src={arrow} alt="" />
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className={`${footer.two}`}>
                            <div className={`${footer.twoIcons} `}>
                                    <div className={`${footer.twoIconsContainer} `}>
                                        <ul>
                                            <div>
                                                <Image src={facebook} alt="" />
                                            </div>
                                            <div>
                                            <div>
                                                <Image src={insta} alt="" />
                                            </div>
                                            </div>
                                            <div>
                                                <Image src={tube} alt="" />
                                            </div>
                                        </ul>
                                    </div>   
                            </div>
                            <div className={`${footer.twoDetails}`}>
                                <p>
                                Blogify is a platform that empowers writers to share their voice with the world. Whether you are a seasoned blogger or just starting out, Blogify provides the tools and support you need to succeed.
                                </p>
                            </div>
                    </div>
                </div>
                <div className={`${footer.bottom} `}>
                    <div className={`${footer.bottomContainer} `}>
                        <div className={`${footer.bottomDetail}`}>
                            <div className=''>
                                <p style={{fontSize:'30px', fontWeight:'bold', color:'white'}}>blogify</p>
                            </div>
                            <div style={{color:'white', fontSize:'20px'}} className=' flex_between'>
                                <p>Writing</p>
                                <p>Blog</p>
                                <p>Video</p>
                                <p>Affiliat</p>
                                <p>Contact</p>
                            </div>
                            <div style={{alignItems:'center', justifyContent:'flex-end', color:'white', fontSize:'20px'}}  className='only_flex'>
                                <p>© 2023 Blogify. All rights reserved.</p>
                            </div>
                        </div>
                        <div className={`${footer.bottomDetailRes}`}>
                            <div className=''>
                                <p style={{fontSize:'30px', fontWeight:'bold', color:'white'}}>blogify</p>
                            </div>
                            <div style={{color:'white', fontSize:'20px'}} className=' flex_around'>
                                <div style={{width:'40%'}}>
                                    <p>Writing</p>
                                    <p>Blog</p>
                                    <p>Video</p>
                                </div>
                               <div style={{width:'40%'}}>
                                    <p>Affiliat</p>
                                    <p>Contact</p>
                                   
                               </div>
                            </div>
                            
                        </div>
                       <p style={{textAlign:'center', color:'white', padding:'10px 0', fontSize:'18px'}}>Terms and Conditions | Privacy Policy</p>
                       <p className={footer.footerLastRes} style={{textAlign:'center', color:'white', padding:'10px 0', fontSize:'18px'}}>© 2023 Blogify. All rights reserved.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;