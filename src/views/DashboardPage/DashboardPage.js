import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import CustomDrawer from "../../components/Drawer/CustomDrawer";


import styles from "assets/jss/material-kit-react/views/landingPage.js";
import dashboardStyle from './dashboardStyle.module.scss';

// Sections for this page

import GeneralStatsSection from "./Sections/GeneralStatsSection.js";
import RecognizeSection from "./Sections/RecognizeSection.js";
import GeneralInfoSection from "./Sections/GeneralInfoSection";
import { getActivityAttempts } from "../../services/activitiesService";

const dashboardRoutes = [];

const useStyles = makeStyles({
  ...styles,
});

export default function DashboardPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [list, setList] = useState([]);

  useEffect(
    () => {
      getActivityAttempts()
        .then(
          (responce) => {
            console.log(responce.data);
            setList( responce.data );
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

  return (
    <div className={dashboardStyle.dashboard}>
      { /*
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      */ }

    <CustomDrawer>



          <GeneralInfoSection className={classes.section} />
          <GeneralStatsSection className={classes.section}  />
          <RecognizeSection className={classes.section}  />


    </CustomDrawer>

      { /* <Footer /> */ }
    </div>
  );
}
