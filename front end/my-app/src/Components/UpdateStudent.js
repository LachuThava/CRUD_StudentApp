import axios from "axios";
import React from "react";
import { Form,Button } from "react-bootstrap";
import {useParams} from "react-router";


function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams()
    return <Component {...props} params={params} />
  }
  return ComponentWithRouter
}

class UpdateStudent extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      
      name:'',
      age:'',
      gender:''
    };

    this.HandleAge = this.HandleAge.bind(this);
    this.HandleGender = this.HandleGender.bind(this);
    this.HandleName = this.HandleName.bind(this);
    this.HandleUpdate = this.HandleUpdate.bind(this);  

  }
  
  componentDidMount(){
      var temp = {};
      const {id} = this.props.params;
      // console.log("com did mount :",id);
      const url = 'http://localhost:8989/api/'+id;
      const requestOptions = {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        }
      };
      axios.get(url,requestOptions)
      .then(result =>result.data)
          .then((data)=>{
              console.log("data : ",data);
              temp = data;
              this.setState({
                name:data.name,
                age:data.age,
                gender:data.gender
              })      
          });
          
          console.log("temp : ",temp);
    }


   HandleName(event){
    this.this.setState({
      name:event.target.value
    });
   }

    HandleGender(event){
    this.setState({
      gender:event.target.value
    });
   }
   
    HandleAge(event){
      this.setState({
        age:event.target.value
      });
   }

    HandleUpdate(){
      const {id} = this.props.params;
      console.log("id : ",id);
        const url = "http://localhost:8989/api/updateStudent/"+id; 
        const requestOptions = {
          method: 'PUT',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          },
      };
      const update = {
        "name":this.state.name,
        "gender":this.state.gender,
        "age":this.state.age
      };
        axios.put(url,update,requestOptions)
        .then(res => res.data)
        .then(()=>{
          window.location.href = '/';
          
          console.log("its working");
          
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  
    render(){
      return (
        <div className="h-screen">
            <div className='m-auto
           position-relative 
           top-1/4  max-w-2xl 
           p-2
           shadow-lg
           h-72
             outline outline-offset-2 outline-cyan-500'>
              <div className='flex justify-center mb-9'>
        <label className='text-3xl font-bold'>Update Student</label>
      </div>
            <Form onSubmit={this.HandleUpdate}>
                <div className='flex justify-center mb-2'>
                  <Form.Label className='w-20'>Name</Form.Label>
                  <Form.Control 
                        className='max-w-lg'
                        type="text" 
                        onChange={(e)=> {this.HandleName(e)}} 
                        value={this.state.name} 
                        name="name" 
                        placeholder="Enter your name" 
                        />
                </div>
                <div className='flex justify-center mb-2'>
                  <Form.Label className='w-20'>Gender</Form.Label>
                  <Form.Control
                        className='max-w-lg'
                        type="text"
                        onChange={(e)=> {this.HandleGender(e)}} 
                        value={this.state.gender} 
                        name="gender"
                        placeholder="Enter your gender" 
                          />
                </div>
                <div className='flex justify-center mb-3'>
                  <Form.Label className='w-20'>age</Form.Label>
                  <Form.Control 
                        className='max-w-lg'
                        type="text" 
                        onChange={(e)=> {this.HandleAge(e)}} 
                        value={this.state.age} 
                        name="age" 
                        placeholder="Enter your age" 
                        />
                </div>
                <div className='flex justify-center'>
                  <Button type='submit'>update Student</Button>
                </div>
            </Form>
        </div>
        </div>
        );
    }

}
export default withRouter(UpdateStudent);