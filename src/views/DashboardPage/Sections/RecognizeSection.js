

import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import helloWorldIcon from 'assets/img/activities/helloWorld.png';
import feelWorldIcon from 'assets/img/activities/feelWorld.png';
import discoverWorldIcon from 'assets/img/activities/discoverWorld.png';

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";


const CustomSlide = (props) => {
  const { index } = props;
  return (
    <div style={ {borderRadius: '50%', overflow: 'hidden', backgroundColor: props.color,margin: '0 10px',
       height: '100px', width: '100px', color: 'white'
    } }>
      <img src={index} style={ { width: '100%' } }/>
    </div>
  )
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style,
        width: '30px',
        background: '#83D3F4 0% 0% no-repeat padding-box',
        height: '100%',
        position: 'absolute',
        opacity: 1
      }}
      onClick={onClick}
    >
      next
    </button>
  )
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style,
        width: '30px',
        background: '#83D3F4 0% 0% no-repeat padding-box',
        height: '100%',
        position: 'absolute',
        opacity: 1
      }}
      onClick={onClick}
    >
      Prev
    </button>

  )
};


const useStyles = makeStyles({
  ...styles,
  section: {
    width: '100%',
    background: '#FCF3EA 0 0 no-repeat padding-box ! important',
    padding: '0 20px'
  },
  nextArrow: {
    position: 'absolute',
    right: '0',
    background: "green"
  },
  title: {
    font: 'normal normal bold 20px/24px Lato',
    letterSpacing: '1.18px',
    color: '#C8C8C8',
    opacity: 1
  }
});

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow  />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={classes.section}>
      <div className={classes.container} >
        <GridContainer >
          <h1 className={classes.title}>What your child recognizes best</h1>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings} style={ {position: 'relative'} } >

                <CustomSlide color={'red'} index={helloWorldIcon}/>
                <CustomSlide color={'red'} index={discoverWorldIcon}/>
                <CustomSlide color={'red'} index={feelWorldIcon}/>
                <CustomSlide color={'red'} index={helloWorldIcon}/>
                <CustomSlide color={'red'} index={discoverWorldIcon}/>
                <CustomSlide color={'red'} index={feelWorldIcon}/>
                <CustomSlide color={'red'} index={helloWorldIcon}/>
                <CustomSlide color={'red'} index={discoverWorldIcon}/>
                <CustomSlide color={'red'} index={feelWorldIcon}/>

              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

