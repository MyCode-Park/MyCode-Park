import React from 'react';
import "./Home.css";
import Productr1 from '../Productr1/Productr1';
import Productr2 from '../Productr2/Productr2';
import vid1 from  '../video/vid1.mp4';


function Home()
{
    return(
        <div className="home">
         <div className="home__container">
         <div className="home__row">
             <Productr1 
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             info="Clean.Fresh.Healthy"
             title="Green Chilli"
              />
            <Productr1
            image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
            info="Clean.Fresh.Healthy"
            title="Drumstick"
            />
          </div>
         <div className="home__row">
             <Productr2
             id={1}
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={4}/>
         <Productr2
            id={2324}
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={3}
            />

         <Productr2
             id={3}
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={2}/>
         <Productr2
            id={4}
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={3}/>

          
          </div>
	
          <div className="home__row">
              <video autoPlay loop muted className='home__video'>
              <source src={vid1} type="video/mp4" />
              </video>
          </div>

          <div className="home__row">
              <Productr2
              image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
                             <Productr2
              image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
                             <Productr2
              image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
                             <Productr2
              image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
          </div>

          <div className="home__row">
              <Productr2
              image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/29/full/1585492083-5639.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
               <Productr2
              image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/29/full/1585492083-5639.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
              <Productr2
              image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/29/full/1585492083-5639.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
              <Productr2
              image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/29/full/1585492083-5639.jpg"
               title="apple"
               price={10.11}
               rating={3}
               />
              
               
               
        
          </div>
        


         </div>
    
         </div>
    );
}


export default Home;