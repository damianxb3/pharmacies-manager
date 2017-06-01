package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.MedicineItem;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/medicineItem")
public class MedicineItemController {
    private MedicineItemService medicineItemService;

    public MedicineItemController(MedicineItemService medicineItemService) {
        this.medicineItemService = medicineItemService;
    }

    @GetMapping("/getByPhar/{id}")
    public List<MedicineItem> get(@PathVariable("id") long id) {
        System.out.println("in get by phar");

        return medicineItemService.getByPhar(id);
    }
}
