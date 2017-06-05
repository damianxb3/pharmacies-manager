package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.Medicine;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return medicineService.get((long) id);
    }

    @PutMapping("/modify")
    public Medicine modify(@RequestBody Medicine medicine) {
        return medicineService.modify(medicine);
    }

    @PutMapping("/add")
    public Medicine addMed(@RequestBody Medicine medicine) {
        return medicineService.addMedicine(medicine);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMed(@PathVariable("id") long id ) {
        medicineService.delete(id);
    }

}
