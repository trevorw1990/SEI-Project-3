import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'

const About = () => {
  return (
    <>
      <Marquee className="banner">
        <div>The latest design</div>
        <div className="middle-banner">The Faux MoMA</div>
        <div>.</div>
      </Marquee>
    

      <div className="background d-flex justify-content-between">
        <div className="about-info">
          <h1 className="font-monospace">About </h1>
          <p className="font-monospace para-1">This website was designed purely for visuals and functionality. This is in no way shape or form meant to be in competition with the real MoMA design store or sell any real products.</p>
          
          

     

        </div>
        <div className="code-team d-flex">
        
          <img variant="top" className="img-fuild" src="https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwbeac6843/images/139412_a.jpg?sw=626&sh=626&sm=cut" />
          <h3> developed by Trevor Whitehurst</h3>

          
        </div>
      </div>


      <img className="font-monospace memorial-title" src="https://www.linkpicture.com/q/fauxmoma-1.png"></img>

      <CardGroup>
        <Card className="burt">
         
          
        </Card>

        <Card className="luna">
          
          
        </Card>
      </CardGroup >
    </>


  )
}

export default About

