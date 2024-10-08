package com.travel.far_away.controller;

import com.travel.far_away.model.Item;
import com.travel.far_away.model.SortStatus;
import com.travel.far_away.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/v1/items")
public class ItemController {

    @Autowired
    private ItemService itemService;


    @GetMapping("/get")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable String id) {
        Optional<Item> item = itemService.getItemById(id);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Item createItem(@RequestBody Item item) {
        return itemService.saveItem(item);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable String id, @RequestBody Item itemDetails) {
        Optional<Item> item = itemService.getItemById(id);
        System.out.println(id + " " + itemDetails.getId());
        System.out.println(itemDetails);
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

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable String id) {
        System.out.println("ID of the object"+ id);

        if(!itemService.existsItemById(id)) {
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND, "The id of the item does not exist");
        }
        itemService.deleteItem(id);
        return ResponseEntity.ok("Deleted the item");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAllItems() {
        itemService.deleteAllItems();
        return ResponseEntity.ok("Deleted all items");
    }

    @GetMapping("/sort/{property}")
    public ResponseEntity<List<Item>> sortItemsByProperty(@PathVariable SortStatus property) {
        return switch (property){
            case DESCRIPTION -> ResponseEntity.ok((itemService.sortItemsByDescription()));
            case INPUT_ORDER -> ResponseEntity.ok((itemService.sortItemsByInputOrder()));
            case PACKED_STATUS -> ResponseEntity.ok((itemService.sortItemsByPackedStatus()));
            default -> ResponseEntity.notFound().build();
        };
    }

}