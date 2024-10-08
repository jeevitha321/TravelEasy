package com.travel.far_away.repository;

import com.travel.far_away.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<Users, String> {
}