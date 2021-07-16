import React from "react";
import "./Componentstyles/ourclients.css";
const OurClient = () => {
  return (
    <div className="container-fluid client">
      <div className="container">
        <div className="clients" data-aos="fade-left">
          <h1 className="clients-head">Our Trusted Client</h1>
          <p className="client-words">
            We have show that some of our best partners ho all beside us
          </p>
        </div>
        <div className="img" data-aos="fade-up-right">
          <img
            src="http://pluspng.com/img-png/athletic-brands-png-sports-product-logos-1600.png"
            alt=""
          />
        </div>
      </div>
      <div className="partners" data-aos="fade-in">
        <div className="PartnerContent" data-aos="fade-up">
          <h2 className="partner-head">
            Over 70% of our clients partner with us post-launch
          </h2>
          <p className="partner-work">
            Work to Know Why ?{" "}
            <span className="cConv">Lets have a Conversation Today</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurClient;
