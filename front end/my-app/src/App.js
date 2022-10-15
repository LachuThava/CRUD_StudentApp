import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent';
import Home from './Components/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateStudent from './Components/UpdateStudent';



function App() {
  let {id} = useParams();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path= '/updateStudent/:id' element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
      {/* <AddStudent /> */}
    </div>
  );
}

export default App;
