import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setUserName, setIsAuthenticated } from '../../../redux/user/userActions';
import { loginUser } from '../../../services/authService';
import './forgotPassword.scss';


export default function ForgotPassword({ history }) {
  const dispatch = useDispatch();

  const loginClick = async () => {
    try{
      const response = await loginUser("test","56M2020");
      console.log(response);
      dispatch(setIsAuthenticated(true));
      dispatch(setUserName('Test'));
      history.push('/snapshot');
    } catch(error){
      console.log(error);
    }
  }


  return (
    <div className="container">
      <div id="bg"></div>
      <div className="card">
          <section className="card__left">
              <div className="card__left__header">
                Forgot Password
              </div>
              <div className="card__left__title">
                <h1>MARS</h1>
                <p>Analytics Product Repository</p>
              </div>
          </section>
          <section className="card__right">
            <form noValidate autoComplete="off" className="signinform">
              <div className="signinform__input">
                <TextField id="forgotpassword-username" label="USER NAME" />
              </div>
              <div className="signinform__input">
                <TextField id="forgotpassword-newpassword" type="password" label="NEW PASSWORD" />
              </div>
              <div className="signinform__input">
                <TextField id="forgotpassword-confirmpassword" type="password" label="CONFIRM PASSWORD" />
              </div>
              <div className="signinform__action">
                <Button id="forgotpassword-login" variant="contained" className="signinform__action__submit"  onClick={loginClick} role="signin">
                   Submit
                </Button>
              </div>
            </form>
          </section>
      </div>
    </div>
  );
}
