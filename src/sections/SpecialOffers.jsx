import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffers = () => {
  return (
    <section
      className="flex justify-wrap
   items-center max-xl:flex-col-reverse
   gap-10 max-container"
    >
      <div className="flex-1">
     <img src={offer} width={773} height={687} className="object-contain
     w-full"/>
      </div>
      <div className="flex flex-1 flex-col" >
    
        
    <h2 className='text-4xl capitalize font-bold
    lg:max-w-lg'>
      
      <span className="text-coral-red"> Special </span>
      
Offer
      
    </h2>
    <p className='mt-4 lg:max-w-lg
    info-text'>Discover the ultimate blend of comfort and style with our exclusive Nike shoe collection! For a limited time, enjoy unbeatable discounts on our top-selling models. Whether you’re hitting the gym, going for a run, or just stepping out for a casual day, our Nike shoes are designed to provide maximum support and durability. 
    </p>
    <p className="mt-6 lg:max-w-lg info-text"> Hurry, these deals won’t last long! Our special offer page features a wide range of Nike shoes at prices you won’t believe. From classic designs to the newest releases, there’s something for everyone. Take advantage of our limited-time discounts and experience the perfect combination of performance and style. 
    </p>
    <div className="mt-11 flex flex-wrap gap-4">
      <Button label="Shop now" iconURL={arrowRight} />
      <Button label="Learn more" backgroundColor='bg-white'
      borderColor='border-slate-gray' textColor='text-slate-gray'
      />
      </div>
   

  </div>
    </section>
  );
};

export default SpecialOffers;
