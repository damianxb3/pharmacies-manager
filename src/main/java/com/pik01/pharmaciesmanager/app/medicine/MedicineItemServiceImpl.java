package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.MedicineItem;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineItemServiceImpl implements MedicineItemService {
    private MedicineItemRepository medicineItemRepository;

    public MedicineItemServiceImpl(MedicineItemRepository medicineItemRepository) {
        this.medicineItemRepository = medicineItemRepository;
    }

    public List<MedicineItem> getByPhar(long id) {
       return this.medicineItemRepository.findByPharmacy_Id(id);
    }

}
