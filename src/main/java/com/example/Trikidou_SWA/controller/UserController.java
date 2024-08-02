package com.example.Trikidou_SWA.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Trikidou_SWA.model.User;
import com.example.Trikidou_SWA.repository.UserRepository;



@RestController
@RequestMapping("/api/users")
public class UserController {
 @Autowired
 private UserRepository userRepository;

 @GetMapping
 public List<User> getAllUsers() {
     return userRepository.findAll();
 }

 @GetMapping("/{id}")
 public User getUserById(@PathVariable Long id) {
     return userRepository.findById(id).orElseThrow();
 }

 @PostMapping
 public User createUser(@RequestBody User user) {
     return userRepository.save(user);
 }

 @DeleteMapping("/{id}")
 public ResponseEntity<?> deleteUser(@PathVariable Long id) {
     userRepository.deleteById(id);
     return ResponseEntity.ok().build();
 }
}
