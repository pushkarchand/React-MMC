import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './productSnapshot.scss';
import { useDispatch, useSelector } from 'react-redux';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Dialog from '../../../sharedmodules/dialog/customDialog';
import WidgetsOption from '../../../sharedmodules/widgetoption/widgetOption';
import MultiSelectWidgetsOption from '../../../sharedmodules/widgetoption/multiSelectWidget';
import {setSelectedWidget,setProductSnapShotList} from '../../../redux/product/productActions';
import BookmarkWidgets from '../../../sharedmodules/widgets/bookmarkWidgets';
import CustomWidgets from '../../../sharedmodules/widgets/customWidgets';
import FaviourateProductWidgets from '../../../sharedmodules/widgets/faviourateWidgets';
import ProductUpdateWidgets from '../../../sharedmodules/widgets/productUpdateWidgets';
import RecentlyUsedProductWidgets from '../../../sharedmodules/widgets/recentProductWidgets';
import ProductsReviewWidgets from '../../../sharedmodules/widgets/productReviewWidgets';
import ProductDatawWidgets from '../../../sharedmodules/widgets/dataWidgets';

export default function ProductSnapshot() {
    const [multiSelectWidgetOpen, setMultiSelectWidgetOpen] = useState(false);
    const [singleSelectWidgetOpen, setSingleSelectWidgetOpen] = useState(false);
    const [selectedWidetIndex, setSelectedWidetIndex] = useState(-1);
    const slectedSnapShots = useSelector(state => state.product.selectedWidgets);
    const widgetsList = useSelector(state => state.product.snapShotList);
    const dispatch = useDispatch();


    useEffect(() => {
        if(slectedSnapShots.length===0){
            const snapShots=[];
            for(let i=0;i<6;i++){
                snapShots.push({});
            }
            dispatch(setSelectedWidget(snapShots));
        }
    },[])

    const closeMultiSelectWidgets=()=>{
        setMultiSelectWidgetOpen(false);
    }

    const handleMultiSelectWidgitDialogOpen=()=>{
        setMultiSelectWidgetOpen(true);
    }

    const closeSingleSelectWidgets=(widget=null)=>{
        setSingleSelectWidgetOpen(false);
        if(widget.id){
            slectedSnapShots[selectedWidetIndex]=widget;
            dispatch(setSelectedWidget(JSON.parse(JSON.stringify(slectedSnapShots))));
        }
    }

    const handleSingleSelectWidgitDialogOpen=(index)=>{
        setSelectedWidetIndex(index);
        setSingleSelectWidgetOpen(true);
    }

    const removeWidget=(index)=>{
        const widgets=JSON.parse(JSON.stringify(slectedSnapShots));
        widgetsList.forEach(item => {
            if(item.id===widgets[index].id){
                item.isSelected=false;
            }
        });
        
        widgets[index]={};
        dispatch(setProductSnapShotList(JSON.parse(JSON.stringify(widgetsList))));
        dispatch(setSelectedWidget(widgets));
    }


    return (
        <React.Fragment>
             <div className="snapshotwidget">
              <WidgetsIcon id="selectWidgets" className="snapshotwidget__icon" onClick={handleMultiSelectWidgitDialogOpen}/><span className="snapshotwidget__title">WIDGET</span>
             </div>
             <div className="snapshotContainer">
                {slectedSnapShots.map((widget,index)=>(
                    <React.Fragment key={`title-${index}`}>
                    {widget.name?(
                    <Grid id={`widget-${index}`}  className="snapshotContainer__widget" container  justify="center" spacing={1}>
                        <div className="ribbon">{widget.name}</div> 
                        <RemoveCircleOutlineIcon className="snapshotContainer__widget__remove" onClick={()=>removeWidget(index)}/>
                            {
                                widget.type==='FaviorateProducts'?(<FaviourateProductWidgets widget={widget}/>):
                                widget.type==='Products'?(<CustomWidgets widget={widget}/>):
                                widget.type==='RecentlyUsedProducts'?(<RecentlyUsedProductWidgets widget={widget}/>):
                                widget.type==='ProductRelease'?(<ProductUpdateWidgets widget={widget}/>):
                                widget.type==='ProductUpdate'?(<ProductUpdateWidgets widget={widget}/>):
                                widget.type==='ProductReview'?(<ProductsReviewWidgets widget={widget}/>):
                                widget.type==='ProductData'?(<ProductDatawWidgets widget={widget}/>):
                                widget.type==='Bookmarks'?(<BookmarkWidgets widget={widget}/>):("")
                                
                            }
                    </Grid>
                ):(
                    <Grid container key={`empty-${index}`} className="snapshotContainer__widget snapshotContainer__addmore"   justify="center" spacing={1}>
                                    <ControlPointIcon id="addwidget" className="snapshotContainer__addmore__icon" onClick={()=>handleSingleSelectWidgitDialogOpen(index)}/>
                    </Grid>
                )}
                 </React.Fragment>))}
            </div>
            {
                multiSelectWidgetOpen?( <Dialog closeDialog={closeMultiSelectWidgets} isOpen={multiSelectWidgetOpen} title="Select Widgets">
                        <MultiSelectWidgetsOption/>
                </Dialog>):("")
            }
             {
                singleSelectWidgetOpen?( <Dialog closeDialog={closeSingleSelectWidgets} isOpen={singleSelectWidgetOpen} title="Add a Widget">
                        <WidgetsOption setSelectWidget={closeSingleSelectWidgets}/>
                </Dialog>):("")
            }
           
        </React.Fragment>
    )
}
