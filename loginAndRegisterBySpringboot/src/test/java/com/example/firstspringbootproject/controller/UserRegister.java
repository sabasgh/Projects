package com.example.firstspringbootproject.controller;

import com.example.firstspringbootproject.domain.User;
import com.example.firstspringbootproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserRegister {
    private User user;
    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setUser(User user) {
        this.user = user;
    }

    @GetMapping("/register")
    public String register(/*Model model*/) {
       // model.addAttribute("user", user);
        return "register";
    }

    //after pressing submit:
    @PostMapping("/register")
    public String registerSubmit(@ModelAttribute User user) {
        userRepository.save(user);
        return "redirect:/index";
    }
}

