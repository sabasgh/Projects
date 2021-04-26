package com.example.firstspringbootproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Home {
    @GetMapping("/index")
    public String homePage(){
return "index";
    }
}
