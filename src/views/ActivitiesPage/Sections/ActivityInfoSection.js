import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from "@material-ui/core";
import { Line } from 'react-chartjs-2';
import moment from 'moment';

// Style
import ActivitiesListStyle from './activitiesListStyle.module.scss';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import { getActivityAttempts } from "../../../services/activitiesService";

const useStyles = makeStyles(
  {
    titles: {
      padding: '8px'
    },
    activity: {
      margin: '20px 0',
      padding: '12px 0',
      borderTop: '1px solid #D5D5D5',
      borderBottom: '1px solid #D5D5D5',
    },
    titleTexts: {
      textAlign: 'left',
      font: 'normal normal normal 24px/34px Fredoka One',
      letterSpacing: '0px',
      color: '#A5A5A5',
      opacity: 1
    },
    name: {
      textAlign: 'left',
      font: 'normal normal normal 24px/34px Fredoka One',
      letterSpacing: '1.49px',
      color: '#5499D0',
      opacity: 1
    },
    description: {
      textAlign: 'left',
      font: 'normal normal bold 17px/26px Lato',
      letterSpacing: '0px',
      color: '#A8A8A8',
      opacity: 1
    },
    levelText: {
      textAlign: 'left',
      font: 'normal normal normal 18px/26px Fredoka One',
      letterSpacing: '0px',
      color: '#C8C8C8',
      opacity: 1
    },
    level: {
      textAlign: 'left',
      font: 'normal normal normal 18px/26px Fredoka One',
      letterSpacing: '0px',
      color: '#A3E0C1',
      opacity: 1
    }
  }
);


const ActivityInfoSection = (props) => {

    const classes = useStyles();

    const {selected, days, min, name, description, level, icon, charts} = props.info;


    const chartRef = useRef(null);

    const [listData, setListData] = useState( [] );

    const [chartState, setChartState] = useState( {} );
    const [state, setState] = useState( {} );




    useEffect(
      () => {

   /*

        getActivityAttempts(name.toLowerCase())
          .then(
            (responce) => {
              setListData(responce.data.data);
              const listData = responce.data.data;
              const v = {};
              const labels = [];
              const data = [];
              listData.map(
                (el, index) => {
                  const date = new Date(el.createdAt);
                  const mom = new moment(el.createdAt);
               //   console.log(date, date.getDay(), date.getMonth(), date.getFullYear());
                  console.log(`${mom.date()}-${mom.month()}-${mom.year()}`);
               //     labels.push(`${mom.date()}-${mom.month()}-${mom.year()}`);
                    v[`${mom.date()}-${mom.month()}-${mom.year()}`] = 0;
                }
              );

              listData.map(
                (el, index) => {
                  const date = new Date(el.createdAt);
                  const mom = new moment(el.createdAt);
                  //   console.log(date, date.getDay(), date.getMonth(), date.getFullYear());
               //   console.log(`${mom.date()}-${mom.month()}-${mom.year()}`);
               //   labels.push(`${mom.date()}-${mom.month()}-${mom.year()}`);
                  if( el.correct ) {
                    v[`${mom.date()}-${mom.month()}-${mom.year()}`] ++;
                  }
                }
              );
              Object.keys(v).map(
                (el, key) => {
                  labels.push(el);
                  data.push(v[el]);
                }
              )
              console.log('v', v);
              console.log('labels', labels, data);
       //       state.labels = labels;
       //       state.datasets[0].data = data;
              setState(state);
            }
          ).catch(
          (catchResponce) => {
            console.log(catchResponce);
          }
        )

    */
      }
      , []
    )

    return (
      selected ?
        <div className={ActivitiesListStyle.activityInfo}>

          <GridContainer justify={'center'}>
            <GridItem xs={12} sm={12} md={8}>
              <div className={classes.titles}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={8}>
                    <h1 className={classes.titleTexts}>{days} days</h1>
                  </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <h1 className={classes.titleTexts}>{min} min/days</h1>
                </GridItem>
          </GridContainer>
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.activity}>
                <GridContainer justify={'center'} >
                  <GridItem xs={12} sm={6} md={8}>
                    <GridContainer justify={'center'}>
                    <GridItem xs={12} sm={6} md={8}>
                      <h1 className={classes.name}>{name}</h1>
                      <p className={classes.description}>{description}</p>
                      <p className={classes.level}><span className={classes.levelText}>level: </span>{level}</p>
                    </GridItem>
                    <GridItem  xs={12} sm={6} md={4}>
                      <img src={icon}/>
                    </GridItem>
                </GridContainer>
                  </GridItem>
                </GridContainer>
               </div>
            </GridItem>



            <GridItem xs={12} sm={12} md={10}>
              {charts.main}
            </GridItem>

            <GridItem xs={12} sm={12} md={10}>
              {charts.time}
            </GridItem>

            <GridItem xs={12} sm={12} md={10}>
              {charts.recognize && charts.recognize }
            </GridItem>


          </GridContainer>

        </div>
        :
        null
    )
};

export default ActivityInfoSection;
