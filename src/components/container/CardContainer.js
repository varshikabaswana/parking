import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Image, Button } from 'antd';
import { loadInitialData} from '../redux/bookSlot/actions';
import { connect } from 'react-redux';
import './card.css'


const CardContainer= (props) => {
    // const totalSlots = useSelector((state) => state.totalNumOfSlots);
    // const availableSlots = useSelector((state) => state.availableSlots);
    
    useEffect(() => {
      console.log('start....')
      props?.loadData();
    },[props.loadData])
      
    return(
    <div className="card-wrapper" >
    <Row gutter={16}>
      
      <Col span={12} >
        <Card title="CARS" bordered={true} className="cards" >
          <div style={{width : '50%', height : '50%',margin : 'auto'}}>
              <Image src='https://www.pngmart.com/files/22/Range-Rover-PNG-HD-Isolated.png' alt='car' height='50%' width='65%'/>
              <h4 style={{textAlign:'center'}}>Total Slots : {props.car.totalNumOfSlots}</h4>                        
              <h4 style={{textAlign:'center'}}>Available Slots : {props.car.availableSlots}</h4> 
              
          </div>
        </Card>

      </Col>
      <Col span={12}>
        <Card title="BIKES" bordered={true} className="cards">
          <div style={{width : '50%', height : '50%', margin : 'auto'}} >
              <Image src='https://freepngimg.com/save/23388-hero-bike-clipart/1291x1024' alt='bike' height='50%' width='55%' />
              
              <h4 style={{textAlign:'center'}}>Total Slots : {props.bike.totalNumOfSlots}</h4> 
              <h4 style={{textAlign:'center'}}>Available Slots : {props.bike.availableSlots}</h4>
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
const mapDispatchToProps = (dispatch) => {
  return {
    loadData : () => dispatch(loadInitialData())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(CardContainer)