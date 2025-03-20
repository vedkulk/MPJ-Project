package com.miniproject.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @CrossOrigin(origins = "http://localhost:5173") // Allow requests from frontend
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from backend!";
    }
}
