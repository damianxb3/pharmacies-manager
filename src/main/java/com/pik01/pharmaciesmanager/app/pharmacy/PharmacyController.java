package com.pik01.pharmaciesmanager.app.pharmacy;

import com.pik01.pharmaciesmanager.app.pharmacy.model.Pharmacy;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/pharmacy")
public class PharmacyController {
    private PharmacyService pharmacyService;

    public PharmacyController(PharmacyService pharmacyService) {
        this.pharmacyService = pharmacyService;
    }

    @GetMapping
    public List<Pharmacy> getAll() {
        return pharmacyService.getAll();
    }

    @PutMapping("/add")
    public Pharmacy create(@RequestBody Pharmacy pharmacy) {
        return pharmacyService.addPharmacy(pharmacy);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id) {
        pharmacyService.deletePharmacy(id);
    }
}
