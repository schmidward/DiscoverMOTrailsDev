package com.discovermotrails.securitybackend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {


    @PostMapping("/register")
    public String processRegisterUser(){
        return "You're registered";
    }
}
