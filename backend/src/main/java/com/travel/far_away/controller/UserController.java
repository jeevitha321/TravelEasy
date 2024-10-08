package com.travel.far_away.controller;

import com.travel.far_away.model.Users;
import com.travel.far_away.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        log.info("Create user: {}", user);
        return userService.createUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
}
