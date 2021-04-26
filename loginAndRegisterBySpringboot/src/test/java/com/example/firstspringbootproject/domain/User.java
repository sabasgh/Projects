package com.example.firstspringbootproject.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class User {
    private String name;
    private String family;
    @Id
    private String email;
    private String phone;
    private String password;
}
