import React,{useState} from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useDispatch } from 'react-redux';
import {setIsSidebarOpen} from '../../../redux/user/userActions';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MenuIcon from '@material-ui/icons/Menu';
import "./productDetails.scss";

export default function ProductDetails() {
    const [bookMark, setBookMark] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [like, setLike] = useState(false);
    const dispatch = useDispatch();

    const showMenu=()=>{
        dispatch(setIsSidebarOpen(true));
    }

    return (
        <div className="productDetails"> 
            <div className="productDetails__header">
                <div className="productDetails__header__left">
                <MenuIcon className="header__title__menu" onClick={showMenu}/>
                </div>
                <div className="productDetails__header__right">
                    {
                        bookMark?( <BookmarkIcon title="Bookmark" onClick={(e)=>setBookMark(!bookMark)} className="productDetails__header__right__icon activeicon"/>):
                        (<BookmarkBorderIcon title="Bookmark" onClick={(e)=>setBookMark(!bookMark)} className="productDetails__header__right__icon"/>)
                    }
                    {
                        favorite?(<StarIcon title="Favorite" onClick={(e)=>setFavorite(!favorite)} className="productDetails__header__right__icon activeicon"/>):
                        (<StarBorderIcon title="Favorite" onClick={(e)=>setFavorite(!favorite)} className="productDetails__header__right__icon"/>)
                    }
                    {
                        like?(<ThumbUpIcon title="Like" onClick={(e)=>setLike(!like)}  className="productDetails__header__right__icon activeicon"/>):
                        (<ThumbUpIcon title="Like" onClick={(e)=>setLike(!like)} className="productDetails__header__right__icon"/>)
                    }
                    
                   
                </div>
            </div>
            <div className="productDetails__body">
                     <iframe src="https://mathco-mars-frontend-webapp.azurewebsites.net/" className="productDetails__body__iframe"
                     title="MARS Global Horizon Scanning"></iframe>
            </div>
        </div>
    )
}
