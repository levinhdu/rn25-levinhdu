import * as React from 'react';

export interface IHomeWork1Props {
}

export default class HomeWork1 extends React.Component<IHomeWork1Props> {
  public render() {
    return (
        <div>
        
        {/* content */}
        <div className="mt-5">
          <div className="row me-0">
            <div className="col-xxl-3 col-xl-6 col-lg-12 col-md-8">
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
            <div className="col-xxl-5 col-xl-6 col-lg col-md-8">
              <h3>The Walk</h3>
              <p>The walk to the Pulpit Rock will take you approximately two hours, give or take an hour depending
                on the weather conditions and your physical shape.
              </p>
              <img src="https://www.covermore.co.uk/sites/covermore_uk/files/blog-images/norway_image1.jpg" alt="" />
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg col-md-8">
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
        
      </div>
    );
  }
}
