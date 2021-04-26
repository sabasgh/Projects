package com.example.firstspringbootproject;

import com.example.firstspringbootproject.domain.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CreateBean {
    @Bean
    public User getUser(){
        return new User();
    }
}
