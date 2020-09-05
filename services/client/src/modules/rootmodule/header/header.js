import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';
import './header.scss';
import {headerTitles} from '../../../utils/constants';
import MenuIcon from '@material-ui/icons/Menu';
import {setIsSidebarOpen} from '../../../redux/user/userActions';
import ThemeOption from '../../../sharedmodules/themeoption/themeoption';

function Header({history,match}) {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        setTitle(headerTitles[history.location.pathname]||'');
        console.log(history.location.pathname);
    }, [match,history])

    const showMenu=()=>{
        dispatch(setIsSidebarOpen(true));
    }

    return (
        <>
        {
            history.location.pathname.includes('/productdetails')?(""):
            (
                <div className="header">
                <div className="header__title">
                    <MenuIcon id="sidebaropen" className="header__title__menu" onClick={showMenu}/>
                    {title}
                    <ThemeOption/>
                </div>
                <div id="logo" className="header__logo">
                        <h1>MARS</h1>
                        <p>Analytics Product Repository</p>
                </div>
            </div>)
        }
        </>
        
    )
}
export default withRouter(Header);