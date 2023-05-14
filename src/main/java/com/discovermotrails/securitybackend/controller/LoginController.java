package com.discovermotrails.securitybackend.controller;

import com.discovermotrails.securitybackend.model.User;
import com.discovermotrails.securitybackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity processRegisterUser(@RequestBody User user){
        System.out.println("\n ***USER POST request to add a user to the backend database");
        User savedUser = null;
        ResponseEntity response = null;
        try {
            String hashPwd = passwordEncoder.encode(user.getPwd());
            user.setPwd(hashPwd);
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

    @RequestMapping("/user")
    public User getUserDetailsAfterLogin(Authentication authentication) {
        User loadedUser = null;
        Optional<User> optionalUser = userRepository.findByEmail(authentication.getName());
        if (optionalUser.isPresent()) {
            loadedUser = optionalUser.get();
        }
//        else {
//            //TODO: Add error handling when there is no user present.
//        }
        return loadedUser;

    }

    //TODO #1 - GetMapping for basic login page. Includes form
    //TODO #2 - PostMapping for basic login page
    //TODO #3 - GetMapping for registration page
}
