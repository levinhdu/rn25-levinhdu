import React from 'react';

import './App.css';

function App() {
  return (
    <>
      <div>
        <div className="header bg-secondary fs-2 p-3 text-white">
          The Pulpit Rock
        </div>
        {/* content */}
        <div className="mt-5">
          <div className="row">
            <div className="col">
              <div className='border-bottom'>
                <p className="ms-4 mt-2">The Driver</p>
              </div>
              <div className='border-bottom'>
                <p className="ms-4 mt-2">The Walk</p>
              </div>
              <div className='border-bottom'>
                <p className="ms-4 mt-2">The Return</p>
              </div>
              <div className='border-bottom'>
                <p className="ms-4 mt-2">The End</p>
              </div>
            </div>
            <div className="col col-5">
              <h3>The Walk</h3>
              <p>The walk to the Pulpit Rock will take you approximately two hours, give or take an hour depending
                on the weather conditions and your physical shape.
              </p>
              <img src="https://www.covermore.co.uk/sites/covermore_uk/files/blog-images/norway_image1.jpg" alt="" />
            </div>
            <div className="col">
              <div className="bg-info">
                <div className="div">
                  <h3>What?</h3>
                  <p>The Pulpit Rock is a part of a mountain that looks like a pulpit.</p>
                </div>
                <div className="div">
                  <h3>Where?</h3>
                  <p>The Pulpit Rock is in a Norway.</p>
                </div>
                <div className="div">
                  <h3>Price?</h3>
                  <p>The walk is free!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer bg-secondary text-center mt-5 text-white">
        The walk to the Pulpit Rock will take you approximately two hours, give or take an hour depending
                on the weather conditions and your physical shape.
        </div>
      </div>
    </>
  );
}

export default App;
