import axios from "axios";

export default async function getProducts(search){
  
  const response = await axios.get(`https://blogify-server.vercel.app/api/v1/product?searchTerm=${search}`,{
      cache: "no-store",
    }
  );
  

  return  response
};