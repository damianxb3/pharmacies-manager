package com.pik01.pharmaciesmanager.app.medicine;

import org.springframework.stereotype.Service;

@Service
public class MedicineItemServiceImpl implements MedicineItemService {
    private MedicineItemRepository medicineItemRepository;

    public MedicineItemServiceImpl(MedicineItemRepository medicineRepository) {
        this.medicineItemRepository = medicineItemRepository;
    }



}
