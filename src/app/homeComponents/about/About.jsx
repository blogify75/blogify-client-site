import about from './About.module.css';
import img from '../../../images/creative-collage-portrait-1.png';
import shadow from '../../../images/blogifyShadow.png';
import arrowRight from '../../../icons/arrow.png';
import Image from 'next/image';
const About = () => {
    return (
        <div className={`${about.main}`}>
            <div className={`${about.title}  only_flex`}>
                <div className={`${about.titleOne} `}>
                    <p style={{fontWeight:'bold'}}>About <span style={{color:'red'}}>B</span>logify</p>
                </div>
                <div className={`${about.titleTwo} `}>
                    <p>
                   Welcome to Blogify, your gateway to captivating stories, trending lifestyles, and top-notch news. We curate diverse blogs, spotlight the latest trends in pet supplies, kids products, and beauty essentials through Amazon affiliation. Join us on this journey of inspiration, information, and lifestyle celebration. Welcome to Blogify – where every click tells a story.
                    </p>
                </div>
            </div>
            <br /> 
            <section className={`${about.mainContainer} border only_flex`}>
                    <div className={`${about.mainConImg}`}>
                        <Image src={img} alt="" />
                    </div>
                    <div className={`${about.mainConDetail}`}>
                       <div style={{width:'350px', margin:'auto',paddingTop:'60px'}}>
                            <p className={`${about.mainConDetailP}`}>Unleash Your <br /> Creativity</p>
                       </div>
                       <div style={{width:'500px', margin:'auto',paddingTop:'20px'}}>
                            <Image style={{width:'80%', margin:'auto', display:'block'}} src={shadow} alt="" />
                       </div>
                       <div style={{width:'500px', margin:'auto',paddingTop:'20px', color:'rgba(255, 255, 255, 1)', fontSize:'20px'}}>
                            <p>
                                With Blogify, you have the freedom to write about any topic that inspires you. From personal experiences to professional advice, our platform caters to a wide range of interests. Let your creativity flow and captivate your audience with engaging content.
                            </p>
                            <br />
                            <div style={{display:'flex', alignItems:'center'}}>
                                <p style={{paddingBottom:'5px'}}>See More</p>
                                <span><Image style={{marginLeft:'10px'}} src={arrowRight} alt="" /></span>
                            </div>
                       </div>
                    </div>
            </section>
        </div>
    );
};

export default About;