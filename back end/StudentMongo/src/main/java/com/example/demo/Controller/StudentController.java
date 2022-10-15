package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Student;
import com.example.demo.Repository.StudentRepository;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*") 
public class StudentController {
	
	private StudentRepository studentRepository;
	
	@Autowired
	public void setStudentRepository(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}


	@RequestMapping(method=RequestMethod.GET,path="/{id}")
	public Student getStudent(@PathVariable String id) {
		Student findStudent = studentRepository.findById(id).get();
			return findStudent;
	}

	@RequestMapping(method = RequestMethod.GET,path = "/students")
	public List<Student>getStudents() {
		return studentRepository.findAll();
	}
	
	
	@RequestMapping(method=RequestMethod.POST,path="/addStudent")
	public Student createStudent(Student s) {
		return studentRepository.save(s);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,path="/deleteStudent/{id}")
	public void deleteStudent(@PathVariable String id) {
		studentRepository.deleteById(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT,path="/updateStudent/{id}")
	public Student updateStudent(@PathVariable String id,Student uStudent) {
		Student findStudent = studentRepository.findById(id).get();
		if(findStudent!=null) {
			findStudent.setName(uStudent.getName());
			findStudent.setAge(uStudent.getAge());
			findStudent.setGender(uStudent.getGender());
			studentRepository.save(findStudent);
			return findStudent;
			
		}else {
			return uStudent;
		}
	}
	
}
