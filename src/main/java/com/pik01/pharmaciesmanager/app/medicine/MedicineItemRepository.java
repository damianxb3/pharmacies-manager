package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.MedicineItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicineItemRepository extends JpaRepository<MedicineItem, Long> {
    List<MedicineItem> findByPharmacy_Id(long id);
}
