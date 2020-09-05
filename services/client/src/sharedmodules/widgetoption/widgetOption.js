import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Notify,{AlertTypes} from '../../services/notify';
import './widgetOption.scss';

export default function WidgetOption({setSelectWidget}) {
    const selectedWidgets = useSelector(state => state.product.selectedWidgets);
    const snapShotList = useSelector(state => state.product.snapShotList);
    const [snapShots, setSnapShots] = useState('');
    const [availableSnapShots, setAvailableSnapShots] = useState([]);

    useEffect(() => {
       const list=(
           <>
           {
            availableSnapShots.map((widget,index)=>(
                <div id={`Widget-${index}`} key={`Widget-${index}`} onClick={()=>{selectWidget(widget)}} 
                    className={`widgetContainer__widget ${widget.isSelected?"widgetContainer__selected":""}`}>
                    {widget.name}
                </div>)) 
            }
        </>);
       setSnapShots(list);
    }, [availableSnapShots])

    useEffect(()=>{
        snapShotList.forEach(item=>item.isSelected=false);
        selectedWidgets.forEach(widget=>{
            snapShotList.forEach(item=>{
                if(widget.id===item.id){
                    item.isSelected=true;
                }
            })
        })
        setAvailableSnapShots(JSON.parse(JSON.stringify(snapShotList)));
    },[selectedWidgets])
    

    const selectWidget=(widget)=>{
        const filteredWidgets=selectedWidgets.filter(item=>item.id===widget.id);
        if(filteredWidgets.length>0){
            Notify.sendNotification('Already selected, Please select another widget',AlertTypes.warn);
        } else{
            widget.isSelected=!widget.isSelected;
            setSelectWidget(widget);
        }
    }

   
    return (
        <div className="widgetContainer">
            {snapShots}
        </div>
    )
}
