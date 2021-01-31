import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//  components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomTextField from "../../components/CustomInput/CustomTextField";

// Styles
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import registerStyles from "./registerStyles.module.scss";

// Services
import {registerService} from '../../services/authService';

// import image from "assets/img/bgLogin2.jpg";
import bgLoginImage from "assets/img/bgLogin.png";
import imageUbo from "assets/img/uboRegister/uboRegister.png";






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

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = () => {

    console.log('form');
    console.log('form', name, email, password, confirmPassword);

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if(name.length === 0){
      setNameError(true);
    }

    if(password.length < 8){
      setPasswordError(true);
    }

    if(password !== confirmPassword){
      setConfirmPasswordError(true);
    }



    registerService(name, email, password)
      .then(
        (responce) => {
        console.log(responce.data);
        localStorage.setItem('token', responce.data.user.token.accessToken);
        window.location.href = '/dashboard-page';
      }
    ).catch(
      (responceCatch) => {
        console.log('responce catch', responceCatch);
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

          <img src={imageUbo} className={registerStyles.uboRegister}></img>

        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={7}>
              <Card className={`${classes[cardAnimaton]} ${registerStyles.loginForm}`}>
                <form className={classes.form}>
                  <h1 className={`${classes.divider} ${registerStyles.loginHeader}`}>Sign up</h1>
                  <p className={registerStyles.loginText}>Hello, I’m Ubo! Our website allows you to follow your kid’s progress in all safety</p>
                  <CardBody>
                    <CustomTextField
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        value: name,
                        onChange: handleName,
                        variant: "outlined",
                        size: 'small',
                        label: 'Name',
                        placeholder: 'Name',
                        error: nameError,
                        helperText: nameError ? 'Please enter your name' : null,
                        className: registerStyles.loginTextField,
                        InputProps: {classes: {notchedOutline: classes.notchedOutline}},
                      }}
                    />
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
                        helperText: emailError ? 'Please enter a valid email' : null,
                        className: registerStyles.loginTextField,
                        InputProps: {classes: {notchedOutline: classes.notchedOutline}},
                      }}
                    />
                    <CustomTextField
                      id="password"
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
                        helperText: passwordError ? 'The password must contain more than 8 characters' : null,
                        className: registerStyles.loginTextField,
                        InputProps: {classes: {notchedOutline: classes.notchedOutline}},
                        autoComplete: 'new-password',
                      }}
                    />
                    <CustomTextField
                      id="confirmPassword"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        value: confirmPassword,
                        onChange: handleConfirmPassword,
                        variant: "outlined",
                        size: 'small',
                        label: 'Confirm Password',
                        placeholder: 'Confirm Password',
                        error: confirmPasswordError,
                        helperText: confirmPasswordError ? 'Confirm password does not match the password' : null,
                        className: registerStyles.loginTextField,
                        InputProps: {classes: {notchedOutline: classes.notchedOutline}},
                        autoComplete: 'new-password',
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={10} md={8}>
                        <div  color="primary" size="lg" onClick={onSubmitHandler} className={registerStyles.loginButton}>
                          <p className={registerStyles.loginButtonLabel}>Register</p>
                        </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <p className={registerStyles.linkToRegisterText}>Already have an account? <a href={'/login-page'}><span className={registerStyles.linkToRegister}>login now</span></a></p>
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
