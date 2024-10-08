package com.travel.far_away.controller;

import com.travel.far_away.model.Item;
import com.travel.far_away.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/item")
@CrossOrigin
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable String id) {
        Optional<Item> item = itemService.getItemById(id);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Item createItem(@RequestBody Item item) {
        return itemService.saveItem(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable String id, @RequestBody Item itemDetails) {
        Optional<Item> item = itemService.getItemById(id);
        if(Objects.equals(itemDetails.getId(), id)) {
            if (item.isPresent()) {
                Item updatedItem = item.get();
                updatedItem.setDescription(itemDetails.getDescription());
                updatedItem.setQuantity(itemDetails.getQuantity());
                updatedItem.setPacked(itemDetails.isPacked());
                return ResponseEntity.ok(itemService.saveItem(updatedItem));
            } else {
                return ResponseEntity.notFound().build();
            }
        }
        else{
            throw  new ResponseStatusException(HttpStatus.CONFLICT, "The id of the body does not match");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable String id) {
        if(!itemService.existsItemById(id)) {
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND, "The id of the item does not exist");
        }
        itemService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}