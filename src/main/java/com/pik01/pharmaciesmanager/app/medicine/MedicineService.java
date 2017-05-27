package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.Medicine;

import java.util.List;

public interface MedicineService {
    List<Medicine> getAll();
    Medicine get(Long id);
    Medicine modify(Medicine medicine);
    Medicine addMedicine(Medicine medicine);
}
