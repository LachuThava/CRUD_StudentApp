import React from "react";
import axios from "axios";
import { Button,Table } from "react-bootstrap";
class Students extends React.Component{

  constructor(props){
    super(props);
    this.state={
      students:[]
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount(){
        const requestOptions = {
          method: 'GET',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
      };
        await fetch('http://localhost:8989/api/students',requestOptions)
        .then(result =>result.json())
        .then((data)=>{
            console.log("data : ",data);
            this.setState({
              students:data
            })
        })    
        
        console.log("students",this.state.students);
  }

  handleUpdate(props){
    window.location.href='/updateStudent/'+`${props}`;
  }

   handleDelete(props){
    const id = props;
    const url = "http://localhost:8989/api/deleteStudent/"+id; 
    const requestOptions = {
      method: 'DELETE',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
       },
  };
  console.log(url);
    axios.delete(url,requestOptions);
}


  render(){
    return(
      <div className="">
          <Table className="  absolute justify-center">
            <thead className="flex-col">
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th></th>
                </tr>
            </thead>
            <tbody className="">
            {this.state.students.map((item)=>{
              return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>
                            <Button onClick={()=>{this.handleUpdate(item.id)}} className="mr-2">Update</Button>
                            <Button onClick={()=>{this.handleDelete(item.id)}}  style={{ color: "white", background: "red" }}>Delete</Button>

                          </td>
                      </tr>
                  
                );
              }
            )
          }
            </tbody>
      </Table>

    </div>    

    );
  }

}
export default Students;