import React from 'react';
import './sidebar.scss';
import {useHistory} from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WidgetsIcon from '@material-ui/icons/Widgets';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import {setIsSidebarOpen} from '../../../redux/user/userActions';
import { useDispatch } from 'react-redux';

const items=[
    {
        path:"/snapshot",
        label:"Product Snapshot",
        tooltip:"Product Snapshot",
        logo:WidgetsIcon,
        submenu:[],
        isOpen:false
    },
    {
        path:"/productoverview",
        label:"Product Overview",
        tooltip:"Product Overview",
        logo:DashboardIcon,
        submenu:[],
        isOpen:false
    },
    {
        path:"/productdetails",
        label:"Product Details",
        tooltip:"Product Details",
        logo:ViewListIcon,
        submenu:[],
        isOpen:false
    }]


export default function Sidebar() {
    const dispatch = useDispatch();
    const history=useHistory();
    const navigate=(route)=>{
        history.push(route.path)
    }

    const logoutUser = () => {
        localStorage.removeItem('mars.access_token');
        localStorage.removeItem('mars.refresh_token');
        dispatch({type:"USER_LOGOUT"});
    }

    const closeSideBar=()=>{
        dispatch(setIsSidebarOpen(false));
    }

    return (
        <div className="sidebarcontainer">
                <ul className="sidebarcontainer__mainmenulist">
                         <li id="sidebarclose" className="sidebarcontainer__mainmenulist__closeitem">
                            <CloseIcon className="sidebarcontainer__mainmenulist__closeitem__close" onClick={closeSideBar}/>
                        </li>
                        {/* <li className="sidebarcontainer__mainmenulist__item">
                            <AccountCircleIcon className="sidebarcontainer__mainmenulist__item__logo"/>
                            <p className="sidebarcontainer__mainmenulist__item__title">User profile</p>
                        </li> */}
                        {items.map((item,index)=>(
                            <li key={`menu-${index}`} id={`${item.label}-index`} className="sidebarcontainer__mainmenulist__item" onClick={()=>navigate(item)}>
                                    <item.logo className="sidebarcontainer__mainmenulist__item__logo"/>
                                    <p className="sidebarcontainer__mainmenulist__item__title">{item.label}</p>
                            </li>
                        ))}
                            <li id="user_logout" className="sidebarcontainer__mainmenulist__item" onClick={(e) => logoutUser()}>
                                    <ExitToAppIcon className="sidebarcontainer__mainmenulist__item__logo"/>
                                    <p className="sidebarcontainer__mainmenulist__item__title">Logout</p>
                            </li>
                </ul>
        </div>
    )
}
