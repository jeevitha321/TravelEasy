package com.travel.far_away.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "items")
public class Item {
    @MongoId(FieldType.STRING)
    private String id;
    private String description;
    private int quantity;
    private boolean packed;
}
