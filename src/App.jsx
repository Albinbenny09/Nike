import {Hero,SuperQuality,Services,PopularProducts,
  SpecialOffers,CustomerReviews,Suscribe,Footer} from './sections'
  import Nav from './components/Nav'



const App = () =>(
<main className="relative">
<Nav/>
<section className="xl:padding-l
wide:padding-r padding-b">
<Hero/>
</section>

<section className="padding">
<PopularProducts/>
</section>
<section className="padding">
<SuperQuality/>
</section>
<section className="padding ml-56 mr-56">
<Services/>
</section>
<section className="padding">
<SpecialOffers/>
</section>
<section className="bg-pale-blue padding">
<CustomerReviews/>
</section>
<section className="padding-x sm:py-32 py-16 w-full">
<Suscribe/>
</section>
<section className="bg-black padding-x padding-t pb-8">
<Footer/>
</section> 
</main>
);

 export default App;

