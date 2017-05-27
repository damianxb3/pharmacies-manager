package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.Medicine;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicine")
public class MedicineController {
    private MedicineService medicineService;

    public MedicineController(MedicineService medicineService) {
        this.medicineService = medicineService;
    }

    @GetMapping
    public List<Medicine> getAll() {
        return medicineService.getAll();
    }

    @GetMapping("/{id}")
    public Medicine get(@PathVariable("id") int id) {
        Long idLong = new Long(id);
        return medicineService.get(idLong);
    }

    @PutMapping("/modify")
    public Medicine modify(@RequestBody Medicine medicine) { return medicineService.modify(medicine); }

    @PostMapping("/add")
    public Medicine addMed(@RequestBody Medicine medicine) {
        return medicineService.addMedicine(medicine);
    }

}
