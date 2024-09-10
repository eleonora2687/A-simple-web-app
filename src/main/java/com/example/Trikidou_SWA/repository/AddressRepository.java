package com.example.Trikidou_SWA.repository;

import com.example.Trikidou_SWA.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

public interface AddressRepository extends JpaRepository<Address, Long> {
    
    @Query("SELECT MAX(a.id) FROM Address a")
    Optional<Long> findMaxId();
}
