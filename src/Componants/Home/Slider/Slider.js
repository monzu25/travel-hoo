import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel fade style={{ height: "500px" }}>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://images.pexels.com/photos/3289167/pexels-photo-3289167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>None-Stop Traveling Services</h3>
            <p>Customer Satisfaction is one of our first Priority</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://images.pexels.com/photos/4034045/pexels-photo-4034045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Refresh Your Mind And Enjoy The Amazing Coral Beach</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/Yf_GrrZK0SsRKJ7CyFzRugIizl04CK0D.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Get Touch Natural Green Expand Your Joyous </h3>
            <p>Get A Happy Tour With us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://images.pexels.com/photos/2890865/pexels-photo-2890865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Get Tousch To Our Experts</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
