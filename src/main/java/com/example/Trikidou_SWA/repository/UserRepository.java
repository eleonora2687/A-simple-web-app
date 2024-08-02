package com.example.Trikidou_SWA.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Trikidou_SWA.model.User;

public interface UserRepository extends JpaRepository<User, Long> {}
