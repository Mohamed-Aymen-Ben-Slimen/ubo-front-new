import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-slick";


// @material-ui/icons

// core components
import CustomDrawer from "../../components/Drawer/CustomDrawer";


import styles from "assets/jss/material-kit-react/views/landingPage.js";
import dashboardStyle from './dashboardStyle.module.scss';

// Sections for this page
import ActivitiesListSection from "./Sections/ActivitiesListSection";
import ActivityInfoSection from "./Sections/ActivityInfoSection";

// Icons
import helloWorldIcon from 'assets/img/activities/helloWorld.png';
import feelWorldIcon from 'assets/img/activities/feelWorld.png';
import discoverWorldIcon from 'assets/img/activities/discoverWorld.png';
import happy from 'assets/img/happy.png';
import sad from 'assets/img/sad.png';
import angry from 'assets/img/angry.png';
import { getActivityAttempts } from "../../services/activitiesService";
import { Bar, Line } from "react-chartjs-2";
import RecognizeSection from "../DashboardPage/Sections/RecognizeSection";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";



const CustomSlide = (props) => {
  const { index } = props;
  return (
    <div style={ {borderRadius: '50%', overflow: 'hidden', backgroundColor: props.color,margin: '0 10px',
      height: '100px', width: '100px', color: 'white'
    } }>
      {props.children}
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


const useStyles = makeStyles({
  ...styles,
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function DashboardPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [list, setList] = useState([]);
  const [listDataHelloWorld, setListDataHelloWorld] = useState([]);
  const [listDataFeelWorld, setListDataFeelWorld] = useState([]);
  const [listDataDiscoveryWorld, setListDataDiscoveryWorld] = useState([]);

  useEffect(
    () => {
      getActivityAttempts()
        .then(
          (responce) => {
            console.log(responce.data.data);
            const listData = responce.data.data;

            setListDataHelloWorld(
              listData.filter(
                (val, key) => {
                  if (val.activity === 'hello world'){
                    return val;
                  }
                }
              )
            )

            setListDataFeelWorld(
              listData.filter(
                (val, key) => {
                  if (val.activity === 'feel world'){
                    return val;
                  }
                }
              )
            )

            setListDataDiscoveryWorld(
              listData.filter(
                (val, key) => {
                  if (val.activity === 'discovery world'){
                    return val;
                  }
                }
              )
            )




          }
        )
        .catch(
          (responceCatch) => {
            console.log(responceCatch);
          }
        )
    }
    , []
  );

  const chartMainHelloWordData = {
    labels: ['09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020'],
    datasets: [
      {
        label: 'Time to respond',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [4, 5, 7, 8, 6]
      }
    ]
  }

  const chartMainFeelWordData = {
    labels: ['09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020'],
    datasets: [
      {
        label: 'Time to respond',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [4, 6, 7, 8, 8]
      }
    ]
  }

  const chartMainDiscoverWordData = {
    labels: ['09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020'],
    datasets: [
      {
        label: 'Time to respond',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [2, 5, 6, 6, 8]
      }
    ]
  }

  const chartTimeDiscoverWordData = {
    labels: ['09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020'],
    datasets: [
      {
        label: 'Time to respond',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [18, 16, 15, 13, 12]
      }
    ]
  }

  const chartTimeFeelWordData = {
    labels: ['09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020'],
    datasets: [
      {
        label: 'Time to respond',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [22, 20, 19, 17, 15]
      }
    ]
  }

  const chartTimeHelloWordData = {
    labels: ['09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020'],
    datasets: [
      {
        label: 'Time to respond',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [20, 20, 19, 15, 13]
      }
    ]
  }

  useEffect(
    () => {
      setList(
        [
          {
            id: '1',
            selected: true,
            name: 'Hello World',
            description: 'An activity that focuses on teaching basic human emotions',
            days: 4,
            min: 20,
            level: 'beginner',
            category: 'Emotions',
            icon: helloWorldIcon,
            listData: listDataHelloWorld,
            charts: {
              main: (<Line
                data={chartMainHelloWordData}
                options={{
                  title:{
                    display:true,
                    text:'Score',
                    fontSize:20
                  },
                  legend:{
                    display:false,
                    position:'right'
                  }
                }}
              />),
              time: (<Bar
                data={chartTimeHelloWordData}
                options={{
                  title:{
                    display:true,
                    text:'Time to response',
                    fontSize:20
                  },
                  legend:{
                    display: false,
                    position:'right'
                  } , scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }}
              />),
              recognize:  <GridContainer >
                <h1 style={ { font: 'normal normal bold 20px/24px Lato',
                  letterSpacing: '1.18px',
                  color: '#C8C8C8',
                  opacity: 1} }>What your child recognizes best</h1>
                <GridItem xs={12} sm={12} md={10} style={ {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>
                  <img style={ {borderRadius: '50%', overflow: 'hidden', border: '4px solid green',margin: '0 10px',
                    height: '150px', width: '150px', color: 'white'
                  } }  src={happy}/>
                  <img style={ {borderRadius: '50%', overflow: 'hidden', border: '4px solid yellow',margin: '0 10px',
                    height: '150px', width: '150px', color: 'white'
                  } }  src={angry}/>
                  <img style={ {borderRadius: '50%', overflow: 'hidden', border: '4px solid red',margin: '0 10px',
                    height: '150px', width: '150px', color: 'white'
                  } }  src={sad}/>
                </GridItem>
              </GridContainer>
            }
          },
          {
            id: '2',
            selected: false,
            name: 'Feel World',
            description: 'An activity that focuses on basic language',
            days: 4,
            min: 40,
            category: 'Attention',
            level: 'beginner',
            icon: feelWorldIcon,
            listData: listDataFeelWorld,
            charts: {
              main: (<Line
                data={chartMainFeelWordData}
                options={{
                  title:{
                    display:true,
                    text:'Score',
                    fontSize:20
                  },
                  legend:{
                    display:false,
                    position:'right'
                  }
                }}
              />),
              time: (<Bar
                data={chartTimeFeelWordData}
                options={{
                  title:{
                    display:true,
                    text:'Time to response',
                    fontSize:20
                  },
                  legend:{
                    display: false,
                    position:'right'
                  } , scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }}
              />)
            }
          },
          {
            id: '3',
            selected: false,
            name: 'Discovery World',
            description: 'An activity that focuses on visual and auditive attention',
            days: 4,
            min: 40,
            level: 'beginner',
            category: 'Speech',
            icon: discoverWorldIcon,
            listData: listDataDiscoveryWorld,
            charts: {
              main: (<Line
                data={chartMainDiscoverWordData}
                options={{
                  title:{
                    display:true,
                    text:'Score',
                    fontSize:20
                  },
                  legend:{
                    display: false,
                    position:'right'
                  }
                }}
              />),
              time: (<Bar
                data={chartTimeDiscoverWordData}
                options={{
                  title:{
                    display:true,
                    text:'Time to response',
                    fontSize:20
                  },
                  legend:{
                    display: false,
                    position:'right'
                  } , scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }}
              />)
            }
          }
        ]
      );
    },
    []
  );

  const selectActivity = (activityId) => {

    const updatedList = list.map(
      (el, key) => {
        el.selected = false;
        if(el.id === activityId){
          el.selected = true;
        }
        return(el);
      }
    );
    setList(updatedList);

  };

  const displayList = () => {
    return (
      list.map(
        (activity, key) => {
          return(
            <ActivityInfoSection key={key} info={activity}/>
          )
        }
      )
    )
  };


  return (
    <div className={dashboardStyle.dashboard}>

      <CustomDrawer>

      <div className={classes.page}>
        <ActivitiesListSection list={list} onClickActivity={selectActivity}/>

        {displayList()}


      </div>

      </CustomDrawer>

      { /* <Footer /> */ }
    </div>
  );
}
