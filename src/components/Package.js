import React from 'react'
import {Container, Row, Tab, Tabs } from 'react-bootstrap';
import LogoDesignPackage from './LogoDesignPackage';
import WebDesignPackage from './WebDesignPackage';
import BrochureDesignPackage from "./BrochureDesignPackage";
import BannerDesignPackage from "./BannerDesignPackage.js";
import BusinessCardDesignPackage from "./BusinessCardDesignPackage";
import StationaryPackage from "./StationaryPackage.js";
import SocialPackage from "./SocialPackage";

const Package = () => {

  const datas = [
    {
       "id": 1,
       "eventkey": "logodesign",
       "title": "Logo Design",
       "tab": <LogoDesignPackage/>
    },
    {
      "id": 2,
      "eventkey": "websitedesign",
      "title": "Website Design",
      "tab": <WebDesignPackage/>
    },
    {
      "id": 3,
      "eventkey": "brochuredesign",
      "title": "Brochure Design",
      "tab": <BrochureDesignPackage/>
    },
    {
      "id": 4,
      "eventkey": "bannerdesign",
      "title": "Bannner Design",
      "tab": <BannerDesignPackage/>
    },
    {
      "id": 5,
      "eventkey": "businesscarddesign",
      "title": "Business Card Design",
      "tab": <BusinessCardDesignPackage/>
    },
    {
      "id": 6,
      "eventkey": "stationarydesign",
      "title": "Stationary Design",
      "tab": <StationaryPackage/>
    },
    {
      "id": 7,
      "eventkey": "socialmediaads",
      "title": "Social Media ADS",
      "tab": <SocialPackage/>
    },
  ]

  return (
    <section id="package" style={{padding: "0 15px", marginTop: "70px", marginBottom: "35px"}}>
      <Container fluid>
        <Row>
           <div className='title'>
              <h2>Budget-Friendly Design Packages</h2>
              <h5>We have some affordable design packages for your graphic design needs!</h5>
           </div>
           <Tabs
                defaultActiveKey="logodesign"
                id="justify-tab-example"
                className="mb-3"
                justify
                >
                {
                  datas.map((data) => (
                    <Tab eventKey={data.eventkey} title={data.title} key={data.id}>
                      {data.tab}
                    </Tab>
                  ))
                }
            </Tabs>
        </Row>
      </Container>
    </section>
  )
}

export default Package
