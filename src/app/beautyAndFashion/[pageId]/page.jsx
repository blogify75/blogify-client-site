import Image from 'next/image';
import bf from './beautiAndFashionDetail.module.css';

const pageId = async ({params}) => {

    const url =  'https://blogify-server.vercel.app/api/v1/product'
    const response = await fetch(url, {
        cache:'no-cache'
    });
    const data = await response.json();
    const allData = await data?.data?.data

    const detailData = allData?.find(f => {
        return f?._id === params.pageId;
    })
    

   

    return (
        <div className={`${bf.main}`}>
            <br />
           <div className={`${bf.container}`}>
                <div style={{backgroundColor:'lightblue', padding: '20px 0'}}>
                    <Image className={`${bf.image}`} src={detailData?.img} width={500} height={400} alt='blogify-image'/>
                </div>
               <div style={{padding:'0 15px',}}>
                    <h1>{detailData?.title}</h1>
                    <h3 style={{color:'red'}}>Price: ${detailData?.price}</h3>
                    <div style={{color:'gray', paddingBottom:'30px'}} dangerouslySetInnerHTML={{__html: detailData?.description}}></div>
                </div>
           </div>
        </div>
    );
};

export default pageId;