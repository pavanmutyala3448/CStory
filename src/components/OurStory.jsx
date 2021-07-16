import React from "react";
import "./Componentstyles/ourstory.css";
const OurStory = () => {
  return (
    <div className="container">
      <div className="Titles" data-aos="fade-right">
        <h3 className="Top-head">Welcome To VRM PITTA</h3>
        <h1 className="Main-Heading">
          We’r a dynamic team of creatives people innovation & Marketing Expert.
        </h1>
      </div>
      <div className="CompanyPic" data-aos="fade-in"></div>
      <div className="Visions">
        <div className="row" data-aos="fade-top">
          <div className="col-md-6 left-section">Our Philosophy</div>
          <div className="col-md-6 right-section">
            Now is about change and disruption. It’s about the end of old
            certainties and the beginning of new opportunities. But if that’s
            now – what’s next? We believe what’s next is in the hands of people
            living in a digital world. Digital empowers people. They decide what
            they love, where they engage and what they support. They are
            connected and in control.
          </div>
          <div className="col-md-6 left-section">Vision</div>
          <div className="col-md-6 right-section">
            Now is about change and disruption. It’s about the end of old
            certainties and the beginning of new opportunities. But if that’s
            now – what’s next? We believe what’s next is in the hands of people
            living in a digital world. Digital empowers people. They decide what
            they love, where they engage and what they support. They are
            connected and in control.
          </div>
        </div>
        <button className="btn" data-aos="fade-bottom">
          Work With Us
        </button>
      </div>
    </div>
  );
};
export default OurStory;
