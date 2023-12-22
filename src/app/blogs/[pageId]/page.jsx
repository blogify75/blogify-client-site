import Image from 'next/image';
import blogDetail from './BlogDetail.module.css';

const pageId = async ({params}) => {

    const url =  'https://blogify-server.vercel.app/api/v1/blog'
    const response = await fetch(url, {
        cache:'no-cache'
    });
    const data = await response.json();
    const allData = await data?.data?.data

    const detailData = allData?.find(f => {
        return f?._id === params?.pageId;
    })

    return (
        <div className={`${blogDetail.main}`}>
            <br />
           <div className={`${blogDetail.container}`}>
                <div style={{backgroundColor:'lightblue', padding: '20px 0', }}>
                    <Image className={`${blogDetail.image}`} src={detailData?.img} width={500} height={400} alt='blogify-image'/>
                </div>
               <div style={{padding:'0 15px',}}>
                    <h1>{detailData?.title}</h1>
                    <h3>{detailData?.sub_title}</h3>
                    <div style={{color:'gray', paddingBottom:'30px'}} dangerouslySetInnerHTML={{__html: detailData?.description}}></div>
                </div>
           </div>
        </div>
    );
};

export default pageId;