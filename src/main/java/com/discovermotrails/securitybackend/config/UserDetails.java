package com.discovermotrails.securitybackend.config;

import com.discovermotrails.securitybackend.model.User;
import com.discovermotrails.securitybackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


public class UserDetails implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        String userName, password = null;
        List<GrantedAuthority> authorities = null;

        List<User> siteUser = userRepository.findByEmail(username);
        if (siteUser.size() == 0) {
            throw new UsernameNotFoundException("User details not found for the user: " + username);
        } else {
            userName = siteUser.get(0).getEmail();
            password = siteUser.get(0).getPwd();
            authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(siteUser.get(0).getRole()));
        }
        return new org.springframework.security.core.userdetails.User(username, password, authorities);
    }

}
