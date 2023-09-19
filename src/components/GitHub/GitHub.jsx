import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
  const data = useLoaderData()
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/hiteshchoudhary')
    //      .then(response =>response.json())
    //      .then(data=>{
    //         console.log(data);
    //         setData(data);
    //      })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
    GitHub Follwers: {data.followers} <img src={data.avatar_url} alt="Git Picture" /> width={300}
    </div>
  )
}

export default GitHub

export const githubInfoLoder = async ()=>{
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}
