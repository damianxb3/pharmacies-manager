package com.pik01.pharmaciesmanager.app.medicine;

import com.pik01.pharmaciesmanager.app.medicine.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    List<Medicine> findAllByOrderByName();
}
