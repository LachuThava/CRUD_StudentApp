import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddStudent = () => {
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[gender,setGender]= useState('');
  
  function HandleName(event){
    setName(event.target.value)
   }

   function HandleGender(event){
    setGender(event.target.value)
   }
   
   function HandleAge(event){
    setAge(event.target.value)
   }

 async function handleClick(e){
        e.preventDefault();
        var student = new FormData(); 
        student.append('name',name);
        student.append('age',age);
        student.append('gender',gender);
        const requestOptions = {
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
      };
        
        axios.post('http://localhost:8989/api/addStudent',student,requestOptions)
        .then(res =>{console.log(res.data)})
        .catch((err)=>console.log(err.message));
   }





  return (
    <div className='h-screen'>
          <div className='m-auto
           position-relative 
           top-1/4  max-w-2xl 
           p-2
           shadow-lg
           h-72
             outline outline-offset-2 outline-cyan-500'>
      <div className='flex justify-center mb-9'>
        <label className='text-3xl font-bold'>Student Registration</label>
      </div>
      <div>
        <Form onSubmit={handleClick}>
            <div className='flex justify-center mb-2'>
              <Form.Label className='w-20'>Name</Form.Label>
              <Form.Control 
                    className='max-w-lg'
                    type="text" 
                    onChange={(e)=> {HandleName(e)}} 
                    value={name} 
                    name="name" 
                    placeholder="Enter your name" 
                    />
            </div>
            <div className='flex justify-center mb-2'>
              <Form.Label className='w-20'>Gender</Form.Label>
              <Form.Control
                    className='max-w-lg'
                    type="text"
                    onChange={(e)=> {HandleGender(e)}} 
                    value={gender} 
                    name="gender"
                    placeholder="Enter your gender" 
                      />
            </div>
            <div className='flex justify-center mb-3'>
              <Form.Label className='w-20'>age</Form.Label>
              <Form.Control 
                    className='max-w-lg'
                    type="text" 
                    onChange={(e)=> {HandleAge(e)}} 
                    value={age} 
                    name="age" 
                    placeholder="Enter your age" 
                    />
            </div>
            <div className='flex justify-center'>
              <Button type='submit'>Add Student</Button>
            </div>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default AddStudent