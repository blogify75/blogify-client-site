import Image from 'next/image';
import { latestStory, topNews } from '../../../data/data';
import blogNews from './LatestBlogNews.module.css';
import Link from 'next/link';
import { Span } from 'next/dist/trace';
const LatestBlogNews = async () => {

    const url = `https://blogify-server.vercel.app/api/v1/blog` ;

    const response = await fetch(url, {
      cache: "no-store"
    });
    const data = await response.json();
    const getAllData = await data?.data?.data;

    return (
        <div className={`${blogNews.main}`}>
            <div className={blogNews.titleContainer}>
                <h1 className={`${blogNews.title}`}>Stay <span style={{backgroundColor:'red', paddingBottom:'6px', paddingLeft:'3px',paddingRight:'3px', color:'white'}}>up to date</span> with the latest from Blogify
                </h1>
            </div>
           <section className={`${blogNews.detail}`}>
                <div className={`${blogNews.detailContainer} only_flex`}>
                    <div className={`${blogNews.detailOne}`}>
                        <h6 style={{color:'crimson'}}>TOP NEWS</h6>
                        {
                            getAllData?.slice(0,1)?.map(data => {
                                return (
                                    <div className={`${blogNews.detailOneContainer}`} key={data?.id}>
                                        <Image src={data?.img} width={300} height={400} alt="" />
                                        <h3>{data?.title}</h3>
                                        <p style={{fontSize:'14px'}}>{data?.sub_title?.length > 30 ? data?.sub_title?.slice(0,30) + '...see more'  : data?.sub_title }</p>
                                        <br />
                                        <div className={`${blogNews.detailOneBtn}`}>
                                            <Link style={{textDecoration:'none'}} href={`/blogs/${data?._id}`}><p>READ MORE &gt;</p></Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`${blogNews.detailTwo}`}>
                        <h6 style={{color:'gray', marginLeft:'5%'}}>LATEST STORY</h6>
                        <div className={`${blogNews.detailTwoMain}`}>
                        {
                            getAllData?.slice(0,4)?.map(data => {
                                return (
                                        <div className={`${blogNews.detailTwoContainer}`} key={data?.id}>
                                            <Image src={data?.img} width={300} height={200} alt="" />
                                            <h6>{data?.title}</h6>
                                            <br />
                                            <p style={{fontSize:'13px', color:'gray'}}>{data?.sub_title?.length > 30 ? (data?.sub_title?.slice(0,30) + `...`)  : data?.sub_title }</p>
                                            {data?.sub_title?.length > 30 && <Link style={{textDecoration:'none'}} href={`/blogs/${data?._id}`}>..see more</Link> }
                                            <div className={`${blogNews.detailTwoProfile} only_flex `}>
                                                <div className={`${blogNews.detailTwoProfileOne} flex`}>
                                                    <div
                                                    className='flex'
                                                     style={{
                                                        width:'50px', 
                                                        height:'50px', 
                                                        borderRadius:'50%', 
                                                        backgroundColor:'lightgray'
                                                        }}>
                                                            {data?.name?.substr(0,2)?.toUpperCase()}
                                                    </div>
                                                </div>
                                                <div className={`${blogNews.detailTwoProfileTwo}`}>
                                                        <p>{data?.name}</p>
                                                        <p style={{fontSize:'14px', color:'gray', marginTop:'5px'}}>{data?.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                
                                )
                            })
                        }
                    </div>
                    <div className={`${blogNews.detailTwoBtn}`}>
                            <Link style={{textDecoration:'none'}} href={'/blogs'}><p> MORE NEWS &gt;</p></Link>
                        </div>
                </div>
                </div>
           </section>
        </div>
    );
};

export default LatestBlogNews;