import intro from './Intro.module.css';
import introImg from '../../../images/top-view-adult-with-devices-1.png';
import { IoSearch } from "react-icons/io5";

import Image from 'next/image';
const Intro = () => {
    return (
        <div className={`${intro.main} `}>
            <div className={`${intro.search} `}>
                  <div className={`${intro.inputContainer} `}>
                    <div className={` ${intro.searchSymbol} flex `}>
                    <IoSearch />
                    </div>
                    <input placeholder='Search' type="text" name="" id="" className={` ${intro.introInput}`} />
                  </div>
            </div>
            <div className={`${intro.detail} only_flex`}>
                    <div className={`${intro.detailOne}`}>
                        <br />
                        <span className={`${intro.detailTitle}`}>
                            Trending Blogs, Social Affairs, and
                        </span>
                        <br />
                        <span className={`${intro.detailTitle}`}>
                        Curated Lifestyle
                        </span>
                        <br />
                        <br />
                        <p className={`${intro.detailPara}`}>
                        Welcome to Blogify, your go-to destination for the latest trends, insightful blogs, and updates on social affairs that matter. We believe in keeping you informed, inspired, and engaged with the world around you.
                        <br />
                        <br />
                        At Blogify, we curate a diverse range of topics, from the hottest beauty products to the coziest pet essentials and the most adorable kids gear. Our mission is to provide you with carefully selected recommendations that add value to your everyday life.
                        <br />
                        <br />
                        Explore our blog section, where we delve into the stories shaping our society. From thought-provoking opinion pieces to heartwarming human interest features, we cover it all.
                        <br />
                        <br />
                        So whether you are seeking the perfect lipstick shade, the comfiest bed for your furry friend, or insights into the social issues of our time, Blogify has you covered. Join us on this journey of discovery and lets navigate the world of trends and affairs together.
                        </p>
                        <br />
                        <button className={`${intro.btn}`}>
                            Get Started 
                        </button>
                    </div>
                    <div className={`${intro.detailTwo}`}>
                        <Image src={introImg} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Intro;