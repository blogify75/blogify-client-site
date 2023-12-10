export default async function getProducts(){
  
  const response = await fetch(`https://blogify-server.vercel.app/api/v1/product`,{
      cache: "no-store",
    }
  );
  
  if (!response.ok) {
    throw new Error("failted to fetch blog data");
  }

  

  return await response.json();
};