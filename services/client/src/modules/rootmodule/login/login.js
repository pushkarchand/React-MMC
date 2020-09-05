import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setUserName, setIsAuthenticated } from '../../../redux/user/userActions';
import { loginUser } from '../../../services/authService';
import './login.scss';

export default function Login({ history }) {
  const dispatch = useDispatch();

  const loginClick = async () => {
    try{
      const response = await loginUser("test","56M2020");
      console.log(response);
      dispatch(setIsAuthenticated(true));
      dispatch(setUserName('Pushkar'));
      history.push('/snapshot');
    } catch(error){
      console.log(error);
    }
  }

  const forgotPassword = () => {
    history.push('/forgotpassword');
  }

  return (
    <div className="container">
      <div id="bg"></div>
      <div className="card">
          <section className="card__left">
            <div className="card__left__header">
              Log In
                         </div>
            <div className="card__left__title">
              <h1>MARS</h1>
              <p>Analytics Product Repository</p>
            </div>
          </section>
          <section className="card__right">
            <form noValidate autoComplete="off" className="signinform">
              <div className="signinform__input">
                <TextField id="login-username" label="USERNAME" />
              </div>
              <div className="signinform__input">
                <TextField id="login-password" type="password" label="PASSWORD" />
              </div>
              <div className="signinform__action">
                <Button id="signin-forgotpassword" color="inherit" onClick={(e) => forgotPassword()} className="signinform__action__password">Forgot Password</Button>
                <Button id="signin-submit" variant="contained" className="signinform__action__login"  onClick={loginClick} role="signin">
                    Sign In
                </Button>
              </div>
            </form>
          </section>
      </div>
    </div>
  );
}
