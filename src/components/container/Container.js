import React from 'react'
import './Container.css'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';


function Container(props) {
    // const totalSlots = useSelector((state) => state.totalNumOfSlots);
     //const availableSlots = useSelector((state) => state.availableSlots);
     //console.log(availableSlots);
 
  return (
    <div>
        <div className="flex-container">
                <div className='card'>
                    <div className='container'>
                        <img src='https://www.pngmart.com/files/22/Range-Rover-PNG-HD-Isolated.png' alt='car' height='150px' width='150px'/>
                        <h3>CARS</h3>
                        <h4><b>Total Slots :{props.totalSlots.car}</b></h4> 
                        
                        <h4>Available Slots :{props.availableSlots.car}</h4> 
                    </div>
                </div>
              
                <div className='card'>
                    <div className='container'>
                        <img src='https://freepngimg.com/save/23388-hero-bike-clipart/1291x1024' alt='bike' height='150px' width='150px'/>
                        <h3>BIKES</h3>
                        <h4><b>Total Slots :{props.totalSlots.bike}</b></h4> 
                        <h4>Available Slots :{props.availableSlots.bike} </h4>
                    </div>
                </div>
        </div>
        <br/>
        
    </div>
  )
}
const mapStateToProps = state =>{
    return{
        totalSlots : state.totalNumOfSlots,
        availableSlots : state.availableSlots
    }
}




export default connect(mapStateToProps)(Container);