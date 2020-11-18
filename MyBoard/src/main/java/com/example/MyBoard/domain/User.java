package com.example.MyBoard.domain;

import com.example.MyBoard.dto.UserForm;
import lombok.Getter;

import javax.persistence.*;

@Entity     // JPA entity 등록
@Getter
public class User {

  // @Id >> 식별키(Pk 의미) , 모든 엔티티에 반드시 @Id 지정해주어야함 , @GeneratedValue와 함께 식별키를 어떤 전략으로 생성하는지 명시
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "user_id")
  private Long id;

  @Column(length =50, nullable = false)
  private String email;

  @Column(length = 50,nullable = false)
  private String userName;

  @Column(length = 50,nullable = false)
  private String password;

  // 빈 User 객체는 JPA에서 필요로 하기때문에 추가
  public User(){}

  public User(UserForm userForm){
    this.email = userForm.getEmail();
    this.userName = userForm.getUserName();
    this.password = userForm.getPassword();
  }

  public static User createUser(UserForm userForm){
    return new User(userForm);
  }

}
