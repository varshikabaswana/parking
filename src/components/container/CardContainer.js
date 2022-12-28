import React from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import './card.css'

function CardContainer (props) {
    const totalSlots = useSelector((state) => state.totalNumOfSlots);
    const availableSlotss = useSelector((state) => state.availableSlots);
    const userData = useSelector((state) => state.userDetails);
    console.log(userData);

    console.log('marking car',availableSlotss.car);
    console.log('marking bike',availableSlotss.bike);

    return(
    <div className="site-card-wrapper" >
    <Row gutter={16}>
      
      <Col span={12} >
        <Card title="CARS" bordered={true} className="cards" >
          <div >
              <img src='https://www.pngmart.com/files/22/Range-Rover-PNG-HD-Isolated.png' alt='car' height='150px' width='150px'/>
              <h4>Total Slots :{totalSlots.car}</h4>                        
              <h4>Available Slots :{availableSlotss.car}</h4> 
          </div>
        </Card>
       {console.log(availableSlotss)}
      </Col>
      <Col span={12}>
      
        <Card title="BIKES" bordered={true} className="cards">
          <div >
              <img src='https://freepngimg.com/save/23388-hero-bike-clipart/1291x1024' alt='bike' height='150px' width='150px'/>
              
              <h4>Total Slots :{props.totalSlots.bike}</h4> 
              <h4>Available Slots : {props.availableSlots.bike}</h4>
          </div>
        </Card>
        
      </Col>
      
    </Row>
  </div>
    )
}

const mapStateToProps = state =>{
  return{
      totalSlots : state.totalNumOfSlots,
      availableSlots : state.availableSlots
  }
}



export default connect(mapStateToProps)(CardContainer)