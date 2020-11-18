package com.example.MyBoard.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
public class Board {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "board_id")
  private Long id;

  @Column(length = 50,nullable = false)
  private String title;

  // 크기 제한 없음
  @Lob
  private String content;

  private LocalDateTime createdDate;

  // User와의 연관관계 설정
  // 한명의 User는 여러 게시물을 작성할 수 있기 때문에 Board 스키마에서는 useR_id를 FK로 들고있게 된다.
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User user;

}
