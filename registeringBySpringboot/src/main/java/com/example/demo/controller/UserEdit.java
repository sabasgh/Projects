package com.example.demo.controller;

import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller
public class UserEdit {
    private UserRepository userRepository;
    private User user;

    @Autowired
    public void setUser(User user) {
        this.user = user;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/edit")
    public String editPage(HttpSession httpSession, Model model) {
        if (userRepository.findById(String.valueOf(httpSession.getAttribute("userEmail"))).isPresent()) {
            user = userRepository.findById(String.valueOf(httpSession.getAttribute("userEmail"))).get();
            model.addAttribute("user", user);
            return "edit";
        }
        return "redirect:/index";

    }
    //editing:
    @PostMapping("/edit")
    public String editSubmit(@ModelAttribute User user,HttpSession httpSession,Model model){
        //email is the primary key so we should check it again
        if (httpSession.getAttribute("userEmail").equals(user.getEmail())){
            userRepository.save(user);
        }else{
            if (userRepository.findById(user.getEmail()).isPresent()){
                model.addAttribute("emailStatus","duplicate");
                return "edit";
            }else{
                userRepository.deleteById(String.valueOf(httpSession.getAttribute("userEmail")));
                userRepository.save(user);
                httpSession.setAttribute("userEmail",user.getEmail());
            }
        }
        return "redirect:/edit";
    }

}
