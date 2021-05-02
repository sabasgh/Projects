package com.example.demo;

import com.example.demo.domain.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CreateBean {
    @Bean
    public User getUser(){
        return new User();
    }
}
