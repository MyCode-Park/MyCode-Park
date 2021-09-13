import React from "react";
import "./ProductList.css";
import Hero2 from "../HeroSection/HeroSection2";
import Hero4 from "../HeroSection/HeroSection4";

function ProductList() {
  return (
    <div className="productList">
      <div className="productList__container">
        <div className="productList__row">
          <Hero2
            image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
            info="Clean.Fresh.Healthy"
            title="Green Chilli"
          />
          <Hero2
            image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
            info="Clean.Fresh.Healthy"
            title="Drumstick"
          />
        </div>
        <div className="productList__row">
          <Hero4
            id={1}
            image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
            title="Green Chilli"
            price={5.99}
            rating={4}
          />
          <Hero4
            id={2}
            image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
            title="Green Chilli"
            price={5.99}
            rating={3}
          />

          <Hero4
            id={3}
            image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
            title="Green Chilli"
            price={5.99}
            rating={2}
          />
          <Hero4
            id={4}
            image="https://www.wbcsd.org/var/site/storage/images/programs/food-land-water/food-land-use/global-agribusiness-alliance/news/responsible-business-is-key-to-long-term-value-of-agri-business-companies/64352-3-eng-GB/New-report-shows-responsible-business-is-key-to-long-term-value-of-agri-business-companies_i1140.jpg"
            title="Green Chilli"
            price={5.99}
            rating={3}
          />
        </div>
        {/* Video Section */}

        <div className="productList__row">
          <Hero4
            image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
            title="apple"
            price={10.11}
            rating={3}
          />
          <Hero4
            image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
            title="apple"
            price={10.11}
            rating={3}
          />
          <Hero4
            image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
            title="apple"
            price={10.11}
            rating={3}
          />
          <Hero4
            image="https://m.economictimes.com/thumb/msid-70508995,width-1200,height-900,resizemode-4,imgsize-452373/agri-startup-getty.jpg"
            title="apple"
            price={10.11}
            rating={3}
          />
        </div>

        <div className="productList__row">
          <Hero4
            image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/29/full/1585492083-5639.jpg"
            title="apple"
            price={10.11}
            rating={3}
          />
          <Hero4
            image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/29/full/1585492083-5639.jpg"
            title="apple"
            price={10.11}
            rating={3}
          />
          <Hero4
            image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/29/full/1585492083-5639.jpg"
            title="apple"
            price={10.11}
            rating={3}
          />
          <Hero4
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

export default ProductList;
