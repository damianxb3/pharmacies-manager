package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.MedicineItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineItemRepository extends JpaRepository<MedicineItem, Long> {
}
