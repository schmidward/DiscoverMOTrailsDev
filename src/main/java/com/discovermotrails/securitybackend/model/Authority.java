package com.discovermotrails.securitybackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Entity
public class Authority extends AbstractEntity implements GrantedAuthority {

    private String authority;

    @ManyToMany(mappedBy = "authorities")
    private List<User> users;

    public Authority(String authority, List<User> users) {
        this.authority = authority;
        this.users = users;
    }

    public Authority() {}

    public Authority(String role) {
        this.authority = role;
    }

    @Override
    public String getAuthority() {
        return null;
    }
}
