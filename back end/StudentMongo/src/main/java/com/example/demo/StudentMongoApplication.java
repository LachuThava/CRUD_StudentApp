package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.example.demo.Model.Student;
import com.example.demo.Repository.StudentRepository;

@EnableMongoRepositories(basePackageClasses = StudentRepository.class)
@SpringBootApplication
public class StudentMongoApplication implements CommandLineRunner{

	
	StudentRepository studentRepository;
	
	
	@Autowired
	public void setStudentRepository(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(StudentMongoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//		Student s1 = new Student("Lachu","male","25");
//		Student s2 = new Student("Raam","male","25");
//		studentRepository.save(s1);
//		studentRepository.save(s2);
		
	}

}
