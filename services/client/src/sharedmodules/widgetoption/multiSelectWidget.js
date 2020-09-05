import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSelectedWidget,setProductSnapShotList} from '../../redux/product/productActions';
import Notify,{AlertTypes} from '../../services/notify';
import './widgetOption.scss';

export default function MultiSelectWidgetOption() {
    const selectedWidgets = useSelector(state => state.product.selectedWidgets);
    const snapShotList = useSelector(state => state.product.snapShotList);
    const [snapShots, setSnapShots] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
       const list=(
           <>
           {
            snapShotList.map((widget,index)=>(
                <div id={`Widget-${index}`} key={`Widget-${index}`} onClick={()=>{selectWidget(widget)}} 
                    className={`widgetContainer__widget ${widget.isSelected?"widgetContainer__selected":""}`}>
                    {widget.name}
                </div>)) 
            }
        </>);
       setSnapShots(list);
    }, [snapShotList])

    useEffect(()=>{
        snapShotList.forEach(item=>item.isSelected=false);
        selectedWidgets.forEach(widget=>{
            snapShotList.forEach(item=>{
                if(widget.id===item.id){
                    item.isSelected=true;
                }
            })
        })
        dispatch(setProductSnapShotList(JSON.parse(JSON.stringify(snapShotList))));
    },[selectedWidgets])
    

    const selectWidget=(widget)=>{
        const products=selectedWidgets.filter(item=>widget.id===item.id);
        if(products.length>0){
            // remove Widget from selected widget
            for(let i=0;i<selectedWidgets.length;i++){
                if(selectedWidgets[i].id===widget.id){
                    selectedWidgets[i]={};
                }
            }
            widget.isSelected=false;
            dispatch(setSelectedWidget(selectedWidgets));
            dispatch(setProductSnapShotList(JSON.parse(JSON.stringify(snapShotList))));
        } else{
            let index=-1;
            for(let i=0;i<selectedWidgets.length;i++){
                if(Object.keys(selectedWidgets[i]).length===0){
                    index=i;
                    break;
                }else{}
            }
            if(index!==-1){
                selectedWidgets[index]=widget;
                dispatch(setSelectedWidget(selectedWidgets));
                widget.isSelected=true;
                dispatch(setProductSnapShotList(JSON.parse(JSON.stringify(snapShotList))));
            } else{
                Notify.sendNotification(`Only 6 widgets can be selected`, AlertTypes.warn);
            }
        }
    }

   
    return (
        <div className="widgetContainer">
            {snapShots}
        </div>
    )
}
