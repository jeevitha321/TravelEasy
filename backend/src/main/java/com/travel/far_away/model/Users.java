package com.travel.far_away.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "users")
@Data
public class Users {
    @MongoId(FieldType.STRING)
    private String id;
    private String name;
    private int age;
}
