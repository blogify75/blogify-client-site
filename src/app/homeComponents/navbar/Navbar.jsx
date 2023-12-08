import nav from './Navbar.module.css';
import logo from '../../../images/blogify.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  
    return (
       <div>
         <div className={`${nav.main}`}>
            <div className={`${nav.container}`}>
                <div className={`${nav.left}  flex`}>
                    <Image src={logo} alt='blogify' />
                </div>
                <div className={`${nav.middle}  flex `}>
                    <div className={`${nav.middleContainer} flex `}>
                        <ul className={`only_flex`}>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href='/'>HOME</Link>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href=''>ABOUT US</Link>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href=''>DEALS & SHOPPING</Link>
                            <Link style={{textDecoration:'none', color:'black', marginRight:'25px'}} href='/blogs'>BLOGS</Link>
                        </ul>
                    </div>
                </div>
                <div className={`${nav.right}  flex`}>
                    <div className={`${nav.rightContainer}  flex_around`}>
                        <button className={`${nav.signIn} flex`}>
                            SIGN IN
                        </button>
                        <button className={`${nav.signUp} flex`}>
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${nav.footer}`}>
            <div className={`${nav.footerContainer}`}>
                <div>
                    Latest Blogs
                </div>
                <div>
                    Personal Care
                </div>
                <div>
                    Beauty & Fashion
                </div>
                <div>
                    Pet life
                </div>
                <div>
                    Social
                </div>
                <div>
                    Kids Products
                </div>
                <div>
                    Latest Deals
                </div>
            </div>
        </div>
       </div>
    );
};

export default Navbar;