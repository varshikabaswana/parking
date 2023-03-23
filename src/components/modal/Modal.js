import React,{useState} from "react";
import {Button,Modal} from "antd";
import Marking from "./Marking";
import ViewDetails from "./ViewDetails";


    const modal = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [bookingSlot,setBookingSlot] = useState(false);
        const [viewdetails,setViewDetails] = useState(false);
    
      const showMarkingModal = () => {
        setIsModalOpen(true),
        setBookingSlot(true),
        setViewDetails(false)
        
      };

      const showViewDetailsModal = () => {
        setIsModalOpen(true),
        setViewDetails(true),
        setBookingSlot(false)
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      }; 

      const style = {
        backgroundColor:'#6baae1',
        fontSize :'15px',
        border:'1px solid black'
      }
    return(
        <div style={{textAlign : 'center'}}>
        <Button type='primary' style={style} onClick={showMarkingModal}>Marking</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type='primary' style={style} onClick={showViewDetailsModal}>View Details</Button>&nbsp;
        
        <Modal  open={isModalOpen}  footer={null} onCancel={handleCancel} onOK={handleOk} bookingSlot={bookingSlot} viewdetails={viewdetails}>
          <div>
            {bookingSlot && <Marking close={setIsModalOpen} /> }
            {viewdetails && <ViewDetails />}
          </div>
           
        </Modal>
        </div>
    )
}

export default modal
