package com.example.Trikidou_SWA.repository;

import com.example.Trikidou_SWA.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT MAX(u.id) FROM User u")
    Optional<Long> findMaxId();
}
