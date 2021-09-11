import React from 'react';
import "./Home.css";
import Productr1 from "./Productr1";
import Productr2 from "./Productr2";


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
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={4}/>
         <Productr2
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={3}/>
         <Productr2
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={2}/>
         <Productr2
             image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
             title="Green Chilli"
             price={5.99}
             rating={3}/>
         
          
          </div>
          



         </div>
         </div>
    );
}


export default Home;