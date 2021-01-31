import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import ActivityItem from "../../../components/ActivityItem/ActivityItem";

// Icons
import helloWorldIcon from 'assets/img/activities/helloWorld.png';
import feelWorldIcon from 'assets/img/activities/feelWorld.png';
import discoverWorldIcon from 'assets/img/activities/discoverWorld.png';

// Style
import ActivitiesListStyle from './activitiesListStyle.module.scss';


const useStyles = makeStyles({
  title: {
    textAlign: 'left',
    font: 'normal normal normal 27px/32px Fredoka One',
    letterSpacing: '0px',
    color: '#C8C8C8',
    opacity: 1
  },
  subTitle: {
    textAlign: 'left',
    font: 'normal normal bold 20px/24px Lato',
    letterSpacing: '1.18px',
    color: '#C8C8C8',
    opacity: 1
  },
  list: {
    padding: '12px 0'
  }
});


const ActivitiesListSection = (props) => {

  const {onClickActivity, list} = props;

  const classes = useStyles();

    const displayList = () => {
      return (
      list.map(
        (el, key) => {
          return(
            <GridItem xs={12} sm={12} md={12} key={key}
                      onClick={ () => { onClickActivity(el.id)} }>
              <ActivityItem
                info={el}
              />
            </GridItem>
          )
        }
      )
      )
    };

    return (
        <div className={ActivitiesListStyle.activitiesList}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>My Activities</h1>
            </GridItem>
            <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.subTitle}>Current Activities</h2>
            </GridItem>

            <GridContainer className={classes.list}>

              {displayList()}

            </GridContainer>

            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classes.subTitle}>Completed Activities</h2>
              </GridItem>

              <GridContainer className={classes.list}>

                {displayList()}

              </GridContainer>

            </GridContainer>
          </GridContainer>

        </div>
    )
};

export default ActivitiesListSection;
