package com.user.app.service;

import com.user.app.Entity.Users;
import com.user.app.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    public Users saveUsers(Users users) {
        return userRepository.save(users);
    }
}
