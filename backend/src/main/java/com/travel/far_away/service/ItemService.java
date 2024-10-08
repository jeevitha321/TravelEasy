package com.travel.far_away.service;


import com.travel.far_away.model.Item;
import com.travel.far_away.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getItemById(String id) {
        return itemRepository.findById(id);
    }
    public boolean existsItemById(String id) {
        System.out.println("ID of the object "+ id);
        System.out.println("existsItemById "+ itemRepository.existsById(id));
        return itemRepository.existsById(id);
    }

    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(String id) {
        itemRepository.deleteById(id);
    }
    public void deleteAllItems() { itemRepository.deleteAll();}
    public List<Item> sortItemsByPackedStatus(){
        return itemRepository.findAll(Sort.by(Sort.Direction.ASC, "packed"));
    }
    public List<Item> sortItemsByDescription(){
        return itemRepository.findAll(Sort.by(Sort.Direction.ASC, "description"));
    }
    public List<Item> sortItemsByInputOrder(){
        return itemRepository.findAll(Sort.by(Sort.Direction.ASC,"id"));
    }

}
