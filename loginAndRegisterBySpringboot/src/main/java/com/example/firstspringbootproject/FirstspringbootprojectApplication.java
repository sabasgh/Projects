package com.example.firstspringbootproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class FirstspringbootprojectApplication {

    public static void main(String[] args) {
        SpringApplication.run(FirstspringbootprojectApplication.class, args);
    }

}
