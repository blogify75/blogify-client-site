import React from 'react';
import videos from './video.module.css';
import YoutubeEmbed from '../component/youtubeEmbed';

const Video = async() => {

    const url = `https://blogify-server.vercel.app/api/v1/video` ;

    const response = await fetch(url, {
      cache: "no-store"
    });
    const data = await response.json();
    const getAllData = await data?.data?.data;
    return (
        <div className={`${videos.main}`}>
           <div className={`${videos.container}`} >
            {
                getAllData?.map(data => {
                    return (
                        <div className={`${videos.productsMain}`} key={data?.id}>
                            <div style={{width:'90%', margin:'auto', marginTop:'15px'}}>
                                <YoutubeEmbed embedId={data?.videoLink} ></YoutubeEmbed>
                            </div>
                            <br />
                            <div style={{padding:'15px'}}>
                                <br />
                                <div dangerouslySetInnerHTML={{__html:data?.description?.slice(0, 50) }}></div>
                            </div>
                        </div>  
                    )
                })
            }            
           </div>
        </div>
    );
};

export default Video;