import axios from "axios";

export default async function getAllProducts(){
  
  const response = await axios.get(`https://blogify-server.vercel.app/api/v1/product`,{
      cache: "no-store",
    }
  );
  

  return  response
};