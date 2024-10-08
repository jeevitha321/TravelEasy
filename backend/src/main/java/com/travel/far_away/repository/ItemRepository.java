package com.travel.far_away.repository;

import com.travel.far_away.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ItemRepository extends MongoRepository<Item, String> {
}