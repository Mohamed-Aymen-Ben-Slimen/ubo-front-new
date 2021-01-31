import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import classnames from 'classnames';

// Icons
import targetIcon from 'assets/img/activities/target.png';
import levelIcon from 'assets/img/activities/level.png';

const useStyles = makeStyles({
    activityItem: {
      width: '100%',
      borderTop: '1px white solid',
      borderBottom: '1px white solid',
      borderRadius: '10px',
      margin: '20px 0',
      padding: '10px 0',
      '&:hover': {
        border: '1px blue #D6D6D6',
        boxShadow: '0 0 2px 3px #D6D6D6'
      }
    },
    text: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    textIcon: {
      width: '10%',
      margin: '8px'
    },
    name: {
      textAlign: 'left',
      font: 'normal normal normal 23px/29px Fredoka One',
      letterSpacing: '1.26px',
      margin: 0,
      color: '#9A9A9A',
      opacity: 1
    },
    category: {
      textAlign: 'left',
      font: 'normal normal bold 16px/39px Lato',
      letterSpacing: '0.16px',
      margin: 0,
      color: '#9A9A9A',
      opacity: 1
    },
    level: {
      textAlign: 'left',
      font: 'normal normal bold 16px/39px Lato',
      letterSpacing: '0.16px',
      margin: 0,
      color: '#A3E0C1',
      opacity: 0.75
    },
    icon: {
      width: '30%',
      height: 'auto'
    }
});

const ActivityItem = (props) => {

  const {name, category, icon, level, selected} = props.info;

  const classes = useStyles();

    return (

        <div>
          <GridContainer  justify="center" alignItems="center"
                          className={classes.activityItem}
                          style={ {backgroundColor: selected && 'white'} }>
            <GridItem xs={12} sm={12} md={6}>

              <p className={classes.name}>{name}</p>

              <div className={classes.text}>
                <img src={targetIcon} className={classes.textIcon}/>
                <h2 className={classes.category}>{category}</h2>
              </div>

              <div className={classes.text}>
                <img src={levelIcon} className={classes.textIcon}/>
                <h2 className={classes.level}>{level}</h2>
              </div>
            </GridItem>

            <img src={icon} className={classes.icon} />

          </GridContainer>
        </div>

    )
};

export default ActivityItem;


