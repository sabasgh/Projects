package com.example.demo.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class User {
    @NotNull(message = "فيلد بالا ضروري است!!")
    @NotEmpty(message = "فيلد بالا ضروري است!!")
    private String name;
  /*  @NotNull(message = "فيلد بالا ضروري است!!")
    @NotEmpty(message = "فيلد بالا ضروري است!!")*/
    private String family;
    @Id
/*    @NotNull(message = "فيلد بالا ضروري است!!")
    @NotEmpty(message = "فيلد بالا ضروري است!!")*/
    private String email;
/*    @NotNull(message = "فيلد بالا ضروري است!!")
    @NotEmpty(message = "فيلد بالا ضروري است!!")*/
    private String phone;
 /*   @NotNull(message = "فيلد بالا ضروري است!!")
    @NotEmpty(message = "فيلد بالا ضروري است!!")*/
    private String password;
}
