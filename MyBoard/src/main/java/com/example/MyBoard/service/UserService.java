package com.example.MyBoard.service;

import com.example.MyBoard.domain.User;
import com.example.MyBoard.dto.UserForm;
import com.example.MyBoard.exception.DuplicateEmailException;
import com.example.MyBoard.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  @Transactional
  public void signUpUser(UserForm userForm) throws Exception{
    validateDuplicateEmail(userForm.getEmail());
    userRepository.save(User.createUser(userForm));
  }

  private void validateDuplicateEmail(String email) throws Exception{
    if(userRepository.existsByEmail(email)){
      throw new DuplicateEmailException();
    }
  }

}
