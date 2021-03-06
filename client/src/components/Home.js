import React from 'react'
import { Carousel } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'

const Home = () => {
  return (
    <>
      <Marquee className="banner">
        <div>The latest design</div>
        <div className="middle-banner">The Faux MoMA</div>
        <div>.</div>
      </Marquee>

      <div className=" top-hero d-flex">
        <div className="p-2 w-100 center">
          <h2 className="text-monospace text-center fs-1">The latest & Greatest <i className=""></i>  <span className="fw-bold"><br />Welcome to the Fake MoMA Design Store</span> -- <span className="fw-bold">build your vision</span>!</h2>
          <p className="text-monospace text-center">
            .
          </p>
        </div>
        <div className="flex-shrink-1">
          <img src="https://store.moma.org/on/demandware.static/-/Sites/default/dw4b90e738/images/20220426_MSD_hp_d.jpg" className="img-fluid" alt="" />
        </div>
      </div>

      <div className="mid-hero d-flex justify-content-around text-monospace">
        <div className="info-hero">
          <img src="" />
          <p className="fw-bold lh-sm text-decoration-underline" >Beautifully Organized</p>
          <p>
          </p>
        </div>
        <div className="info-hero">
          <img src="" />
          <p className="fw-bold lh-sm text-decoration-underline">Spring
Gifting</p>
          <p>
          </p>
        </div>
        <div className="info-hero">
          <img src="" />
          <p className="fw-bold lh-sm text-decoration-underline">Pretend MoMA Exclusives</p>
          
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50 img-fluid"
              src="https://store.moma.org/on/demandware.static/-/Sites/default/dw1daee34e/images/20220422_4_ArtistProducts_hp_d.jpg"
              alt="First slide"
            />
            <p className="text-monospace"><q>Our selection process is unreal.</q> </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50 img-fluid"
              src="https://store.moma.org/on/demandware.static/-/Sites-moma-Library/default/dwc8683a49/images/opt/202004_landing_tech_d.jpeg"
              alt="Second slide"
            />
            <p className="text-monospace"><q>Originally Fake Product</q> </p>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50 img-fluid"
              src="https://store.moma.org/on/demandware.static/-/Sites-moma-Library/default/dw32512913/images/opt/20210104_pumpkins_d.png"
              alt="Third slide"
            />
            <p className="text-monospace"><q>Discover what sets the Fake MoMA Design Store apart from any other fake ecommerce.</q> - </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home
