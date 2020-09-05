import React from 'react'
import Popover from '@material-ui/core/Popover';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import {themes} from '../../utils/constants';
import './themeoption.scss'

export default function Themeoption() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    

    const setTheme=(theme)=>{
        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(`--${key}`, value);
        }
        handleClose();
    }

    return (
        <div>
            <FormatColorFillIcon className="themeoptioniocn" aria-describedby={id} onClick={handleClick}/>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
            <ul className="themeoption">
                {
                    themes.map((theme,index)=>(
                        <li id={`theme-${index}`} key={`theme-${index}`} className="themeoption__item" onClick={()=>setTheme(theme)}>
                            <div className="themeoption__item__shape" style={{background:theme.data_color_primary}}></div>
                            <div className="themeoption__item__title">Theme {index+1} </div>
                        </li>
                    ))
                }
            </ul>
            </Popover>
        </div>
    )
}
