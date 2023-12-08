
import Image from 'next/image';
import { serviceFooter, services } from '../../../data/data';
import service from './Service.module.css';
import bg from '../../../images/serviceFooter.png';

const Service = () => {
    
    return (
        <div className={`${service.main}`}>
            <div className={`${service.container}`}>
                <div className={`${service.title}  only_flex`}>
                    <div className={`${service.titleOne} `}>
                        <p>
                        Services We <br /> Offer
                        </p>
                    </div>
                    <div className={`${service.titleTwo} `}>
                        <p style={{fontSize:'25px', fontWeight:'bold'}}>
                            At Blogify, we offer a range of services to support your writing journey and monetize your content. Check out our offerings below:
                        </p>
                        <br />
                        <p style={{fontSize:'18px'}}>
                            We offer a platform for writing and publishing blogs and articles. Join our affiliate program for pet supplies and kids products.
                        </p>
                    </div>
                </div>
                <div className={`${service.detail} `}>
                        {
                            services?.map(data => {
                                return (
                                    <div key={data?.id} className={`${service.detailContainer} `}>
                                        <Image src={data?.img} alt="" />
                                        <section className={`${service.detailsecond} only_flex `}>
                                            <div dangerouslySetInnerHTML={{__html: data?.title}} className={`${service.detailsecondOne}  `}>
                                               
                                            </div>
                                            <div dangerouslySetInnerHTML={{__html: data?.des}}  className={`${service.detailsecondTwo}  `}>
                                               
                                            </div>
                                        </section>
                                    </div>
                                )
                            })
                        }
                </div>
                <div
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                className={`${service.footer} `}>
                    {
                        serviceFooter?.map(data => {
                            return (
                                <div key={data?.id} className={`${service.footerContainer} flex`}>
                                    <div className={`${service.footerDetail} `}>
                                        <br />
                                        <p style={{fontSize:'35px', color:'rgba(225, 21, 29, 1)', fontWeight:'bold'}}>{data?.title}</p>
                                        <p style={{color:'white'}}>{data?.des}</p>
                                        <hr style={{width:'40%', border: ' 2px solid rgba(225, 21, 29, 1)', borderRadius:'2px'}} />
                                    </div>
                                </div>
                            )
                        })
                    }  
                </div>      
                <br />
            </div>
                        
        </div>
    );
};

export default Service;