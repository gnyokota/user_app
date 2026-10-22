package com.user.app.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Entity
@Data
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    @NotNull(message = "{NotNull.User.firstName}")
    private String firstName;

    @Column
    @NotNull(message = "{NotNull.User.lastName}")
    private String lastName;

    @Column
    @NotNull(message = "{NotNull.User.email}")
    private String email;
}
