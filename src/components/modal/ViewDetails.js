import React, { useState,useEffect } from "react";
import { Radio, Col, Row } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";
import axios from "axios";

function ViewDetails () {
  const userData = useSelector((state) => state.userDetails);
  // const dispatch = useDispatch();
  // dispatch(fetchUsers());
  // const [data,setData] = useState([]);
  const [users,setUsers] = useState([]);
  const url = 'http://localhost:5000/users';

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response = await fetch(url);
        if(!response.ok) throw Error("Did not receive data");
        const user = await response.json();
        console.log(user)
        setUsers(user);
      }
      catch(error){
        console.log(error.stack)
      }

    }

    (async () => await fetchData())();
  },[])
  
  const [vehicle, setVehicle] = useState("");
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

      {users?.map((users,index) => {
        return ( vehicle === users.vehicle && (
          <Row key={index}>
            <Col span={12}> {users.name}</Col>
            <Col span={12}> {users.employeeId}</Col>
          </Row>
        ));
        })}
    </div>
  );
};

export default ViewDetails;
