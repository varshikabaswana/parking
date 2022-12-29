import React,{useState,useEffect} from 'react'
import { Button,Form,Input,Radio } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useDispatch } from 'react-redux';
import {bookSlot} from '../redux/bookSlot/actions';
import axios from 'axios';


function Marking (props) {

    const [name, setName] = useState("");
    const [employeeId,setEmployeeId] = useState("");
    const [vehicle,setVehicle] = useState("");
    const [form] = Form.useForm();
    const url ='http://localhost:5000/users';
    const dispatch = useDispatch();

    const handleSubmit =  async (values) => {
        props.close(false);
        dispatch(bookSlot(values));
        const res = await axios.post(url,values,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
    
        form.resetFields();   
                       
    }
    
  return (
    <div className='text-center'>
            <h3>BOOKING SLOT</h3>
            <Form form={form} onFinish={handleSubmit} >
                <FormItem label="Select" name='vehicle' onChange={(e) => setVehicle(e.target.value)}>
                    <Radio.Group>
                        <Radio value='car'> Car </Radio>
                        <Radio value='bike'  > Bike </Radio>
                    </Radio.Group>
                </FormItem>

                <FormItem
                    label="Username"
                    name='username'
                    value={name}
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    onChange={(e) => setName(e.target.value)}
                    >
                    <Input/>
                </FormItem>

                <FormItem
                    label="Employee ID"
                    name='employeeId'
                    value={employeeId}
                    rules={[
                        {
                        required: true,
                        message: 'Please input your employee id!',
                        },
                    ]}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    >
                    <Input/>
                </FormItem>

                <Form.Item >
                    <Button htmlType='submit'>Submit</Button>
                </Form.Item>

            </Form>
    </div>
  )
}

export default Marking

