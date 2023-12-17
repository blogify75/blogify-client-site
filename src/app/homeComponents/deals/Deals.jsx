
import { dealsProduct } from '../../../data/data';
import deals from './Deals.module.css';
import Slider from '../slider/Slider';
import Link from 'next/link';

const Deals = async() => {

    const url = `https://blogify-server.vercel.app/api/v1/product` ;

    const response = await fetch(url, {
      cache: "no-store"
    });
    const data = await response.json();
    const getAllData = await data?.data?.data;

    const underTwentyFive = getAllData?.filter(f => {
        return f?.price <= 25
    });
    

    return (
        <div className={`${deals.main}`}>
           
          <div className={`${deals.container}`}>
                <h1  className={`${deals.title}`} >Deals <span style={{color:'black'}}>of the</span> Day</h1>
                <h5 className={`${deals.sub_title}`}  style={{marginTop:'0'}}>Buy your desired product with best deal</h5>
                <br />
                <section  className={`${deals.products}`}>
                <p style={{fontWeight:'bold', marginLeft:'1%',}}>Exciting Deals <Link href='/deals' style={{color:'lightblue', marginLeft:'10px', textDecoration:'none'}}>See all deals</Link></p>
               
                <Slider dealsProduct={getAllData}></Slider>
                    
                </section>
                <section  className={`${deals.products}`}>
                <p style={{fontWeight:'bold', marginLeft:'1%'}}>Deals under $25 <Link href='/deals' style={{color:'lightblue', marginLeft:'10px', textDecoration:'none'}}>See more</Link></p>
                <Slider dealsProduct={underTwentyFive}></Slider>
                </section>
          </div>
        </div>
    );
};

export default Deals;


