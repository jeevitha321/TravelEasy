package com.travel.far_away.service;

import com.travel.far_away.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import com.travel.far_away.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    public Users getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public Users createUser(Users user) {
        return userRepository.save(user);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
