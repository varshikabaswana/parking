import React, { useState,useEffect } from "react";
import { Radio, Col, Row } from "antd";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

function ViewDetails () {
  
  const [users,setUsers] = useState([]);
  const [vehicle, setVehicle] = useState("");
  const url = 'http://localhost:5000/users';
  const fetchUsers = async () => {
    const response = await axios.get(url);
    return setUsers(response.data);
  }
  useEffect(() => {
    fetchUsers();
  },[])
  
  
  return (
    <div>
      <h3>ViewDetails</h3>
      <Radio.Group>
        <Radio
          value="car"
          name={vehicle}
          onChange={(event) => setVehicle(event.target.value)}
        >
          Car
        </Radio>
        <Radio
          value="bike"
          name={vehicle}
          onChange={(event) => setVehicle(event.target.value)}
        >
          Bike
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
        return ( vehicle === user.vehicle && (
          <Row key={index}>
            <Col span={12}> {user.username}</Col>
            <Col span={12}> {user.employeeId}</Col>
          </Row>
        ));
        })}
    </div>
  );
};

export default ViewDetails;
