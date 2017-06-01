package com.pik01.pharmaciesmanager.app.medicine;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/medicineItem")
public class MedicineItemController {
    private MedicineItemService medicineItemService;

    public MedicineItemController(MedicineItemService medicineItemService) {
        this.medicineItemService = medicineItemService;
    }
}
