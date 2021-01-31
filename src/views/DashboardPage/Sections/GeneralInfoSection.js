import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(
  {
  //  ...styles,
    section: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
        width: '100%',
        background: '#FCF3EA 0 0 no-repeat padding-box ! important'
    },
    generalInformationTitle: {
      font: 'normal normal normal 27px/32px Fredoka One',
      letterSpacing: '0px',
      color: '#C8C8C8',
      opacity: 1
    },
    generalInfo: {
      font: 'normal normal normal 24px/34px Fredoka One',
      letterSpacing: '0px',
      color: '#A5A5A5',
      opacity: 1
    }
  }
);

export default function GeneralInfoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h1 className={classes.generalInformationTitle}>General Information</h1>
      <h1 className={classes.generalInfo}>13 Days</h1>
      <h1 className={classes.generalInfo}>20 min/day</h1>
    </div>
  );
}
