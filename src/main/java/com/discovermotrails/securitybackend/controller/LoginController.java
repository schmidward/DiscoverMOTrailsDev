package com.discovermotrails.securitybackend.controller;

import com.discovermotrails.securitybackend.model.User;
import com.discovermotrails.securitybackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity processRegisterUser(@RequestBody User user){
        System.out.println("\n ***USER POST request to add a user to the backend database");
        User savedUser = null;
        ResponseEntity response = null;
        try {
            savedUser = userRepository.save(user);

            if (savedUser.getId() > 0) {
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body("Given user details are successfully created");
            }
        } catch (Exception ex) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occurred due to " + ex.getMessage());
        }
        return response;
    }
}
