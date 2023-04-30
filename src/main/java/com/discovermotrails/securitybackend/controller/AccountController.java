package com.discovermotrails.securitybackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/account")
    public String renderAccountPage() {
        System.out.println("\n*** USER GET request for account details");
        return "Here are the account details from the DB";
    }
}
