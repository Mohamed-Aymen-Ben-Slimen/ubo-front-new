import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Line, Bar } from 'react-chartjs-2';

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import CardHeader from "../../../components/Card/CardHeader";
import { getTimeSpent } from "../../../services/activitiesService";

const useStyles = makeStyles({
  ...styles,
  title: {
    textAlign: 'left',
    font: 'normal normal bold 20px/24px Lato',
    letterSpacing: '1.18px',
    color: '#C8C8C8',
    opacity: 1
  },
  stats: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '33px',
    opacity: 1
  },
  section: {
    width: '100%',
    background: '#FCF3EA 0 0 no-repeat padding-box ! important',
    padding: '0 20px'
  }
});

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [timeSpent, setTimeSpent] = useState(
    {
      labels: ['09/12/2020' ,'10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [19, 21, 24, 18, 19]
        }
      ]
    }
  );

  const [barChart, setBarChart] = useState(
    {
      labels: ['Hello World' ,'Feel World', 'Discover World'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [32, 40, 37]
        }
      ]
    }
  );

  const [pointsChart, setPointsChart] = useState(
    {
      labels: ['Hello World' ,'Feel World', 'Discover World'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgb(84,152,207)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [14, 9, 16]
        }
      ]
    }
  );

  useEffect( () => {


  }, [] )

  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card plain>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>

              </GridItem>
                  <CardHeader>
                    <h1 className={classes.title}>Time spent on app (minutes)</h1>
                  </CardHeader>

              <CardBody className={classes.stats}>
                <Line
                  data={timeSpent}
                  options={{
                    title:{
                      display:false,
                      text:'Time spent',
                      fontSize:20
                    },
                    legend:{
                      display:false,
                      position:'right'
                    }
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyCenter}>

              </CardFooter>
            </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>

                  </GridItem>
                  <CardHeader>
                    <h1 className={classes.title}>Score per Activity</h1>
                  </CardHeader>

                  <CardBody className={classes.stats}>
                    <Bar
                      data={pointsChart}
                      options={{
                        title:{
                          display:false,
                          text:'Time spent',
                          fontSize:20
                        },
                        legend:{
                          display:false,
                          position:'right'
                        }
                        , scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }
                      }
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>

                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>

                  </GridItem>
                  <CardHeader>
                    <h1 className={classes.title}>Time spent on activities (minutes)</h1>
                  </CardHeader>

                  <CardBody className={classes.stats}>
                    <Bar
                      data={barChart}
                      options={{
                        title:{
                          display:false,
                          text:'Time spent',
                          fontSize:20
                        },
                        legend:{
                          display:false,
                          position:'right'
                        }
                        , scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }
                      }
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>

                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>

                  </GridItem>
                  <CardHeader>
                    <h1 className={classes.title}>Score per Activity</h1>
                  </CardHeader>

                  <CardBody className={classes.stats}>
                    <Bar
                      data={pointsChart}
                      options={{
                        title:{
                          display:false,
                          text:'Time spent',
                          fontSize:20
                        },
                        legend:{
                          display:false,
                          position:'right'
                        }
                        , scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }
                      }
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>

                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>

          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
