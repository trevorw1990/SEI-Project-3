import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div className="background d-flex justify-content-between">
        <div className="about-info">
          <h1 className="font-monospace">About </h1>
          <p className="font-monospace para-1">.</p>
          <p className="font-monospace para-2">. </p>
          <p className="font-monospace para-3"> </p>

          <div className="store-info">
            <p className="font-monospace para-4">. <br /> . <br /> .</p>
            <p className="font-monospace para-4">. <br />
              .</p>
          </div>

        </div>
        <div className="code-team d-flex">
          <h2 className="font-monospace">.</h2>
          <h5 className="font-monospace">.</h5>
          <img variant="top" className="img-fuild" src="" />
          <h3>.</h3>

          
        </div>
      </div>


      <h1 className="font-monospace memorial-title">.</h1>

      <CardGroup>
        <Card className="burt">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="" />
          <h3>.</h3>
          
        </Card>

        <Card className="luna">
          <img className="image-border animate__animated animate__zoomIn luna-img" src="" />
          <h3>.</h3>
          
        </Card>
      </CardGroup >
    </>


  )
}

export default About

