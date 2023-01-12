import React, { useState,useEffect } from "react";
import { Radio, Col, Row } from "antd";
import axios from "axios";

function ViewDetails () {
  
  const [users,setUsers] = useState([]);
  const [vehicle, setVehicle] = useState("car");

  let url='http://localhost:5000/car';
  
    const fetchUsers = async () => {
      if(vehicle == 'bike'){
        url='http://localhost:5000/bike';
      }
      try{ 
      let response = await axios.get(url);
      return setUsers(response.data);
      }
      catch(err){ 
        console.log(err);
      }
    }
    
    const onChange = (event) =>{
      setVehicle(event.target.value)
      
    }
    
    useEffect(() => {
      fetchUsers();
      },[vehicle])
 
  return (
    <div>
      <h3>ViewDetails</h3>
      <Radio.Group onChange={onChange} value={vehicle}>
        <Radio value={"car"} >
          car
        </Radio>

        <Radio value={"bike"}>
          bike
        </Radio>
      </Radio.Group>
      <Row>
        <Col span={12}>
          <b>NAME</b>
        </Col>
        <Col span={12}>
          <b>EMPLOYEE ID</b>
        </Col>
      </Row>

      {users?.map((user,index) => {
        return ( 
          <Row key={index}>
            <Col span={12}> {user.username}</Col>
            <Col span={12}> {user.employeeId}</Col>
          </Row>
        );
        })}
    </div>
  );
};

export default ViewDetails;
