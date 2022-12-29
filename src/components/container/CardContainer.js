import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { resetSlots } from '../redux/bookSlot/actions';
import './card.css'


function CardContainer (props) {
    const totalSlots = useSelector((state) => state.totalNumOfSlots);
    const availableSlots = useSelector((state) => state.availableSlots);
    const [hours,setHours] = useState();
    const [minutes,setMinutes] = useState();
    const [seconds,setSeconds] = useState();
    const dispatch = useDispatch();

    var time = new Date();
    var currentTime = "";
    const calculateTime = () => {
      
      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
      currentTime += hours+ ':' + minutes + ':' + seconds;
      console.log(currentTime)
      if(currentTime >= "23:24:00")
      {
        console.log("currettime")
        dispatch(resetSlots())
      }
      
    };
    useEffect(() => {
      console.log("first")
      setInterval(calculateTime(),1000);

    })


    console.log('marking car',availableSlots.car);
    console.log('marking bike',availableSlots.bike);

    return(
    <div className="site-card-wrapper" >
    <Row gutter={16}>
      
      <Col span={12} >
        <Card title="CARS" bordered={true} className="cards" >
          <div >
              <img src='https://www.pngmart.com/files/22/Range-Rover-PNG-HD-Isolated.png' alt='car' height='150px' width='165px'/>
              <h4>Total Slots :{totalSlots.car}</h4>                        
              <h4>Available Slots :{availableSlots.car}</h4> 
          </div>
        </Card>

      </Col>
      <Col span={12}>
      
        <Card title="BIKES" bordered={true} className="cards">
          <div >
              <img src='https://freepngimg.com/save/23388-hero-bike-clipart/1291x1024' alt='bike' height='150px' width='150px'/>
              
              <h4>Total Slots :{totalSlots.bike}</h4> 
              <h4>Available Slots : {availableSlots.bike}</h4>
          </div>
        </Card>
        
      </Col>
      
    </Row>
  </div>
    )
}


export default CardContainer