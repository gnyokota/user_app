package com.user.app.controller;


import com.user.app.Entity.Users;
import com.user.app.links.UserLinks;
import com.user.app.service.UserService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(path = UserLinks.LIST_USERS)
    public ResponseEntity<?> listUsers() {
        log.info("UserController: List users");
        List<Users> list = userService.getUsers();
        return ResponseEntity.ok(list);
    }

    @PostMapping(path = UserLinks.ADD_USERS)
    public ResponseEntity<?> saveUser(@RequestBody @Valid Users user) {
        log.info("UsersController:  list users");
        Users resource = userService.saveUsers(user);
        return ResponseEntity.ok(resource);
    }

}
