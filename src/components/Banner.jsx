import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

function Banner() {
  return (
    <section style={bannerStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>We Keep Great Company</h2>
        <p style={textStyle}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati natus, minus quod dolorum odit vel tenetur quia facere porro autem quos fuga! Maxime dolores facere quod voluptatem nihil nobis quidem?
        </p>
        <Button text="READ MORE" />
      </div>
      <div style={imageContainerStyle}>
        <img 
          src="./src/assets/banner-img-1.jpg"
          alt="Special Offer" 
          style={imageStyle}
        />
        <div style={saleTagStyle}>
          <span style={salePercentageStyle}>0%</span>
          <span style={saleTextStyle}>SALE</span>
        </div>
      </div>
    </section>
  );
}


const bannerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '40px',
  backgroundColor: '#f8f9fa',
  margin: '20px 0'
};

const contentStyle = {
  flex: '1',
  maxWidth: '50%',
  paddingRight: '40px'
};

const titleStyle = {
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px'
};

const textStyle = {
  lineHeight: '1.6',
  color: '#666',
  marginBottom: '30px'
};

const imageContainerStyle = {
  position: 'relative',
  flex: '1',
  maxWidth: '50%'
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const saleTagStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  backgroundColor: '#ff4757',
  color: 'white',
  padding: '15px',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px',
  height: '80px'
};

const salePercentageStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold'
};

const saleTextStyle = {
  fontSize: '0.9rem'
};

export default Banner;