package com.example.Trikidou_SWA.controller;

import com.example.Trikidou_SWA.model.Address;
import com.example.Trikidou_SWA.model.User;
import com.example.Trikidou_SWA.repository.AddressRepository;
import com.example.Trikidou_SWA.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddressRepository addressRepository;

    private Long getNextId() {
        Long maxUserId = userRepository.findMaxId().orElse(0L);
        Long maxAddressId = addressRepository.findMaxId().orElse(0L);
        return Math.max(maxUserId, maxAddressId) + 1;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public User createUser(@RequestBody User userDetails) {
        Long nextId = getNextId();

        userDetails.setId(nextId);
        if (userDetails.getAddress() != null) {
            userDetails.getAddress().setId(nextId);
        }

        Address address = userDetails.getAddress();
        if (address != null) {
            addressRepository.save(address);
        }

        return userRepository.save(userDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userRepository.findById(id).orElseThrow();

        // Update user basic info
        user.setName(userDetails.getName());
        user.setSurname(userDetails.getSurname());
        user.setGender(userDetails.getGender());
        user.setBirthdate(userDetails.getBirthdate());

        // Update address if present
        if (userDetails.getAddress() != null) {
            Address address = userDetails.getAddress();

            // Fetch current address for this user
            Address currentAddress = user.getAddress();

            if (currentAddress != null) {
                currentAddress.setHomeAddress(address.getHomeAddress());
                currentAddress.setWorkAddress(address.getWorkAddress());
                addressRepository.save(currentAddress);  // Save updated address
            } else {
                // If no current address exists, assign new address to the user
                addressRepository.save(address);
                user.setAddress(address);
            }
        }

        User updatedUser = userRepository.save(user);  // Save updated user
        return ResponseEntity.ok(updatedUser);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getAddress() != null) {
            addressRepository.delete(user.getAddress());  // Explicitly delete the address if present
        }

        userRepository.delete(user);  // Then delete the user
        return ResponseEntity.ok().build();
    }

}
