import React from 'react'
import {Container, Row } from 'react-bootstrap';
import LogoDesign from '../img/logo-design.png'
import PackageDesign from '../img/package-design.png'
import WebDesign from '../img/web-design-development.png'
import PrintDesign from '../img/print-design.png'
import SEO from '../img/search-engine-optimization.png'
import EVS from '../img/explainer-videos-services.png'

const Features = () => {
  
  const datas = [
    {
       "id": 1,
       "img": LogoDesign,
       "title": "SEARCH ENGINE OPTIMIZATION (SEO)",
       "content": "Whether it's on-page optimization, keyword analysis, page speed, sitemaps, or a bevy of other issues, your site's performance and ranking will suffer without proper SEO management and upkeep. Search Engine Optimization is essential for 99% of businesses and a key to growing your website traffic. Our SEO experts can optimize any website and within a few months, we can get you to rank at the top of Google and other search engines with our fervid team of experts."
    },
    {
        "id": 2,
        "img": PackageDesign,
        "title": "BRANDING",
        "content": "A great brand is one that understands who its target audience is, how they think, what they need, and how they spend their time on digital platforms. We excel in meticulously analyzing your target group, identifying the channels and strategizing a plan using Digital Branding's proven methodology and work towards it to make your business into a Brand. Any business venture, being done their branding right, will never fail to become successful in the domain."
     },
     {
        "id": 3,
        "img": WebDesign,
        "title": "SOCIAL MEDIA MARKETING (SMM)",
        "content": "Engage and Evolve. Social Media Management helps you convert audience to fans & followers. Expand your brands reach on internet's hottest social sites. Creative content & seamless execution are the two consistent keys to excel online. Explore the 'how' with us. We provide a four-stage process by understanding the audience through various listening tools; building your brand story to create customized solutions, and continuously tracking the results."
     },
     {
        "id": 4,
        "img": PrintDesign,
        "title": "SEARCH ENGINE MARKETING (SEM)",
        "content": "As a business owner, your goal is to ensure that  search engines can find your website for it to show up and rank high in pertinent search engine results pages (SERPs). We help you in doing it by identifying and capturing the attention of potential customers at the very beginning of their search journey which is done by identifying best-suited channels and setting optimal budgets which eventually provides maximum results by increasing your organic clients."
     },
     {
        "id": 5,
        "img": SEO,
        "title": "WEBSITE DEVOLOPMENT",
        "content": "Website Design and Development is a common but essential marketing service offered by most marketing agencies. We stand out of that crowd by taking a unique approach by not only building your website, but setting it up for proper marketing and SEO to get you more organic customers. We design websites that are creative, mobile responsive, lag-free, eye-catching, and SEO friendly. Our capabilities include Static, Dynamic and E- Commerce Websites. Be it corporate, blogging or selling, we have you well covered."
     },
     {
        "id": 6,
        "img": EVS,
        "title": "APP DEVELOPMENT",
        "content": "We define and build your business on the go on the latest Technology. Your proposition is to monetize  your business digitally and ours is to make it mobile ready. To create a fast and smooth app for any platform, we incorporate the latest technology along with the best experts in field, we also deliver products with an outsourcing app development model. This model gives a reasonable solution to control the budget and other resources. Contact us to create the most appealing app ever."
     }
  ]  


  return (
    <section id="features">
      <Container>
        <Row>
          <div className='title'>
            <h2>Our Digital Marketing Services</h2>  
          </div>
          <div className='featuresFlex'> 
            {
                datas.map((data) => (
                    <div key={data.id} className="featureBox">
                        <div className='featuresSec'>
                            <div className="featureImg">
                                <img src={data.img} alt=""/>
                            </div>
                            <div className='featureContnet'>
                                <p><strong>{data.title}</strong></p>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
        </Row>  
      </Container> 
    </section>
  )
}

export default Features
