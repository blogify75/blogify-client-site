import axios from "axios";

export default async function getBlogs(search){

  const response = await axios.get(`https://blogify-server.vercel.app/api/v1/blog?searchTerm=${search}`,{
      cache: "no-store",
    }
  );
  
  

  return response
};
