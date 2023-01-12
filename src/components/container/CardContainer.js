import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { resetSlots } from '../redux/bookSlot/actions';
import { connect } from 'react-redux';
import './card.css'


function CardContainer (props) {
    // const totalSlots = useSelector((state) => state.totalNumOfSlots);
    // const availableSlots = useSelector((state) => state.availableSlots);
    
    const dispatch = useDispatch();

    var time = new Date();
    let currentTime ="";

    const calculateTime = () => { 
      
      currentTime = time.getHours()+ ':' + time.getMinutes() + ':' + time.getSeconds();
      if(currentTime == "16:22:00")
      {
        console.log("currenttime")
        dispatch(resetSlots())
      }
      
    };

    useEffect(() => {
      console.log("first")
      setInterval(calculateTime,1000);
      console.log(currentTime)
    },[])

    return(
    <div className="site-card-wrapper" >
    <Row gutter={16}>
      
      <Col span={12} >
        <Card title="CARS" bordered={true} className="cards" >
          <div >
              <img src='https://www.pngmart.com/files/22/Range-Rover-PNG-HD-Isolated.png' alt='car' height='150px' width='165px'/>
              <h4>Total Slots :{props.car.totalNumOfSlots}</h4>                        
              <h4>Available Slots :{props.car.availableSlots}</h4> 
              {console.log(props.car.numOfSlotsBooked)}
          </div>
        </Card>

      </Col>
      <Col span={12}>
        <Card title="BIKES" bordered={true} className="cards">
          <div >
              <img src='https://freepngimg.com/save/23388-hero-bike-clipart/1291x1024' alt='bike' height='150px' width='150px'/>
              
              <h4>Total Slots :{props.bike.totalNumOfSlots}</h4> 
              <h4>Available Slots : {props.bike.availableSlots}</h4>
          </div>
        </Card>
        
      </Col>
      
    </Row>
  </div>
    )
}

const mapStateToProps =(state) => {
  return{

    car : state.car,
    bike : state.bike
    // availableSlots : state.availableSlots,
    // totalSlots : state.totalNumOfSlots
  }
}

export default connect(mapStateToProps)(CardContainer)