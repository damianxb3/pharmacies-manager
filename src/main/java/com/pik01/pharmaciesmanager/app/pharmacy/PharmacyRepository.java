package com.pik01.pharmaciesmanager.app.pharmacy;

import com.pik01.pharmaciesmanager.app.pharmacy.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PharmacyRepository extends JpaRepository<Pharmacy, Long> {
    List<Pharmacy> findAllByOrderByAddress_City();
}
