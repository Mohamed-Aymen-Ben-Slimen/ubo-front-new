import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

//  components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomTextField from "../../components/CustomInput/CustomTextField";

// Styles
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import loginStyles from "./loginStyles.module.scss";

// Services
import {loginService} from '../../services/authService';

// import image from "assets/img/bgLogin2.jpg";
import bgLoginImage from "assets/img/bgLogin.png";
import imageHead from "assets/img/head.png";
import imageHand from "assets/svg/hand.svg";
import imageArm from "assets/svg/arm.svg";





const useStyles = makeStyles({
  ...styles,
  textField: {
    background: '#FCF3EA 0 0 no-repeat padding-box',
    opacity: '0.6'
  },
  notchedOutline: {
    borderRadius: '34px !important',
    borderColor: '#FCF3EA'
  }
});

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmail = (e) => {
    console.log(email);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSublitHandler = () => {
    setEmailError(false);
    setPasswordError(false);
    loginService(email, password).then(
      (responce) => {
        console.log(responce.data);
        localStorage.setItem('token', responce.data.user.token.accessToken);
        window.location.href = '/dashboard-page';
      }
    ).catch(
      (responceCatch) => {
        console.log(responceCatch);
        setEmailError(true);
        setPasswordError(true);
      }
    )
  };



  return (
    <div>

      <div
         className={ null // classes.pageHeader
         }

        style={{
          backgroundImage: "url(" + bgLoginImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >




       <div className={loginStyles.ubo}>
         <div className={loginStyles.sideWall}></div>
            <img src={imageHand} className={loginStyles.fixedHand}></img>
            <img src={imageHead} className={loginStyles.uboHead}></img>
            <img src={imageArm} className={loginStyles.arm}></img>
       </div>


        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={5}>
              <Card className={`${classes[cardAnimaton]} ${loginStyles.loginForm}`}>
                <form className={classes.form}>
                  { /*
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  */ }
                  <h1 className={`${classes.divider} ${loginStyles.loginHeader}`}>Login</h1>
                  <p className={loginStyles.loginText}>Hello, I’m Ubo! Our website allows you to follow your kid’s progress in all safety</p>
                  <CardBody>
                    <CustomTextField
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        value: email,
                        onChange: handleEmail,
                        variant: "outlined",
                        size: 'small',
                        label: 'Email',
                        placeholder: 'Email',
                        error: emailError,
                        helperText: emailError ? 'Wrong email or password' : null,
                        className: loginStyles.loginTextField,
                        InputProps: {classes: {notchedOutline: classes.notchedOutline}},
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor}/>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomTextField
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        value: password,
                        onChange: handlePassword,
                        variant: "outlined",
                        size: 'small',
                        label: 'Password',
                        placeholder: 'Password',
                        error: passwordError,
                        helperText: passwordError ? 'Wrong email or password' : null,
                        className: loginStyles.loginTextField,
                        InputProps: {classes: {notchedOutline: classes.notchedOutline}},
                        autoComplete: 'new-password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={10} md={8}>
                        <div  color="primary" size="lg" onClick={onSublitHandler} className={loginStyles.loginButton}>
                          <p className={loginStyles.loginButtonLabel}>Submit</p>
                        </div>
                      </GridItem>

                      <GridItem xs={12} sm={12} md={12}>
                        <p className={loginStyles.linkToRegisterText}>Don't have an account? <a href={'/register-page'}><span className={loginStyles.linkToRegister}>Create One</span></a></p>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {
         // <Footer whiteFont/>
        }
      </div>
    </div>
  );
}
