import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
import { statistics,shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard  from'../components/ShoeCard'
import { useState } from 'react';

const Hero = () => {
const[bigShoeImg,setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full 
    p-2 flex xl:flex-row 
  flex-col justify-center min-h-screen gap-10
  max-container "
    >
      <div
        className="relative xl:w-2/5 flex flex-col
justify-center items-start w-full max-xl:padding-x
 pt-28"
      >
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection </p>
        <h1 className='text-8xl font-bold mt-10 font-palanquin max-sm:text-[72px]
        max-sm:leading-[82]'>
          <span className='xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block
          mt-3'>Nike </span> Shoes
          
        </h1>
        <p className='font-montserrat mt-6 mb-14 text-slate-gray
        text-lg leading-8 sm:max-w-sm'>Discover stylish Nike 
          arrivals,quality comfort,
          and innovation for your active life.
        </p>
       <Button label="Shop now" iconURL={arrowRight}/>
        <div className=' w-full flex justify-start
        flex-wrap mt-20 gap-16'>
        
          {statistics.map((stat, index) => (
          <div key={index}>
              <p className='font-palanquin text-4xl font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
          </div>
      ))}

        </div>

      </div>
      <div className='flex relative flex-1 justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero
      bg-cover bg-center'>
        <img src={bigShoeImg}
        alt='sheo collection' width={610} height={500}
        className='object-contain relative z-10'/>
        <div className='flex sm:gap-6 gap-4 absolute 
         -bottom-[5%] sm:left-[10] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
           <ShoeCard
           imgURL={shoe}
           changeBigSheoImage={(shoe)=>setBigShoeImg(shoe)}
           bigShoeImg={bigShoeImg}
           />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
