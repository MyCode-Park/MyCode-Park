import React from 'react';
import { Parallax } from 'react-parallax';
import './paraeffect.css'; 



const Paraeffect = () =>{
    return (
        <div className="App">
          <Parallax bgImage={ "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" } strength={500}>
            <div className="img-block">
              <div className="wordings">
                  <h1>Why is it so good for me?</h1>
                  <p>Find out what makes our smoothies bursting with nutrients and anti-oxidents!</p>
              </div>
            </div>
          </Parallax>
          {/* <div style={{ height: '100vh' }}></div>  */}
        </div>
      );
}

export default Paraeffect;