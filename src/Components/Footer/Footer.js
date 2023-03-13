import React from 'react'
import weddingPose from '../../Assets/Images/Wedding-Pose.jpg';
import happyWedding from '../../Assets/Images/HappyWedding.jpg';
import ceremony from '../../Assets/Images/Ceremony.jpg';
import birthday from '../../Assets/Images/Birthday.jpg';
import fashion from '../../Assets/Images/Fashion.jpg';
import babyShower from '../../Assets/Images/babyShower.jpg'
import food from '../../Assets/Images/Cusines.jpg'

export const Footer = () => {
  const footerOptions = [
    {image: `${weddingPose}`, serviceName: 'Fabrics'}, 
    {image: `${ceremony}`, serviceName: 'Photgraphy'}, 
    {image: `${birthday}`, serviceName: 'Birthday Celebrations'},
    {image: `${happyWedding}`, serviceName: 'Wedding Services'},
    {image: `${fashion}`, serviceName: 'Mehandi Artist'},
    {image:`${babyShower}`,serviceName:'Baby Showers'},
    {image:`${food}`,serviceName:'Caters'}
  ];
  return (
    <div className='mx-10 mt-5'>
      <h1 className='text-3xl font-bold text-cgy4'>Retailer Services</h1>
      <p className='mt-3 text-lg text-cgy4'>Get Inspired with the latest trends and advice from our wedding experts</p>
      <div className='flex mt-5 ml-4 space-x-20'>
        {footerOptions.map((data,i)=>{
          return(
            <div className='flex-col items-center justify-center' key={i}>
              <div className='flex justify-center'>
              <img src={data.image} className={`w-28 h-28 rounded-full transition duration-1000 hover:scale-125`} alt="img"></img>
              </div>
              <div className='mt-4 font-semibold text-center'>{data.serviceName}</div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}
