package com.example.MyBoard.repository;

import com.example.MyBoard.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository 상속
public interface UserRepository extends JpaRepository<User,Long> {
  boolean existsByEmail(String email);
}
