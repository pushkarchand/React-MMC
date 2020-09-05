import React from 'react';
import Grid from '@material-ui/core/Grid';
import BarChartIcon from '@material-ui/icons/BarChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import LanguageIcon from '@material-ui/icons/Language';
import {NavLink} from 'react-router-dom';
import './widgets.scss';

export default function CustomWidgets({widget}) {
    return (
        <React.Fragment>
            {
                widget.products.map((product,prodIndex)=>(
                    <Grid  item key={`product-${prodIndex}`} className="product" xs={3} sm={3} md={3} lg={3}> 
                            {prodIndex===0?(<BarChartIcon className="product__icon"/>):
                            prodIndex===1?(<TrendingUpIcon className="product__icon"/>):
                            prodIndex===2?(<BubbleChartIcon className="product__icon"/>):
                            prodIndex===3?(<EmojiEventsIcon className="product__icon"/>):
                            prodIndex===4?(<LanguageIcon className="product__icon"/>):
                            (<AllInclusiveIcon className="product__icon"/>)}
                            <NavLink to={`/productdetails/${product.route}`} className="product__title">{product.name}</NavLink>
                    </Grid>
                ))
            }
        </React.Fragment>
    )
}
