"use server"
import Image from "next/image";
import { latestStory } from "../../data/data";
import blogs from "./blogs.module.css";
import Pagination from "../component/Pagination";
import Link from "next/link";


const Blogs = async({searchParams}) => {

  const id = parseInt(searchParams?.page);
 
  const url = `https://blogify-server.vercel.app/api/v1/blog?page=${id}&limit=${10}` ;

  const response = await fetch(url, {
    cache: "no-store"
  });
  const data = await response.json();
  const getAllData = await data?.data?.data;
  
  return (
    <div className={`${blogs.main}`}>
      <div className={`${blogs.container}`}>
        <div className={`${blogs.title} flex `}>
          <div className={`${blogs.titleContainer} `}>
            <div className="">
              <h1>BLOGS: </h1>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
        <div className={`${blogs.heighlighted_Part} `}>
          <div className={`${blogs.heighlighted_title} `}>
            <p>Heighlighted Blog :</p>
            <p>Find new, handpicked stories you’ll love, updated daily.</p>
          </div>
          {latestStory?.slice(0, 1).map((data) => {
            return (
              <div key={data?.id} className={`${blogs.heighlighted_Detail} `}>
                <div className="">
                  <Image
                    style={{ width: "100%", height: "300px" }}
                    src={data?.img}
                    alt=""
                  />
                </div>
                <div style={{ padding: "20px" }} className="">
                  <div className={`${blogs.heighlighted_Detail_title} `}>
                    {data?.title}
                  </div>
                  <div className={`${blogs.heighlighted_Detail_notifier} `}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          backgroundColor: "lightgray",
                          borderRadius: "50%",
                          height: "40px",
                          width: "40px",
                        }}
                        className="flex"
                      >
                        {data?.profile}
                      </div>
                      <p style={{ marginLeft: "10px" }}>{data?.name}</p>
                      <p style={{ marginLeft: "40px", color: "gray" }}>
                        {data?.notification}
                      </p>
                    </div>
                  </div>
                  <div className={`${blogs.heighlighted_Detail_Detail} `}>
                    {data?.des}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`${blogs.allBlogs} `}>
          <div className={`${blogs.allBlogs_title} `}>
            <p>All Blogs : {id ? id : 1}</p>
          </div>
          {getAllData?.map((data) => {
            return (
            
                  <div  key={data?.id} className={`${blogs.allBlogs_container} `}>
                  <div className={``}>
                    <Image
                      style={{ width: "100%", height: "35vh" }}
                      src={data?.img}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div style={{ paddingLeft: "20px" }} className={``}>
                    <div className={`${blogs.allBlogs_Detail_title} `}>
                      {data?.title}
                    </div>
                    <div className={`${blogs.allBlogs_Detail_notifier} `}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            backgroundColor: "lightgray",
                            borderRadius: "50%",
                            height: "40px",
                            width: "40px",
                          }}
                          className="flex"
                        >
                          {data?.name?.slice(0,1)?.toUpperCase()}
                        </div>
                        <p style={{ marginLeft: "10px" }}>{data?.name}</p>
                        <p style={{ marginLeft: "40px", color: "gray" }}>
                          {data?.date}
                        </p>
                      </div>
                    </div>
                    <div>
                        {data?.sub_title}
                    </div>
                    <div>
                        <Link style={{textDecoration:'none'}} href={`/blogs/${data?._id}`}>
                        ...see more
                        </Link>
                    </div>
                  </div>
              </div>
            
            );
          })}
        </div>
        {/* pagination */}
        <div
         className=""
         style={{
          width: '100%',
          height: '100px'
         }}
        >
          <Pagination
          isBorder={true}
          pageNo={id}
          perPageNo={10}
          border="green"
          background={false}
        />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
