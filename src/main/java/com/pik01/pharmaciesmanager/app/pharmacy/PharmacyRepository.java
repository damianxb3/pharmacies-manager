package com.pik01.pharmaciesmanager.app.pharmacy;

import com.pik01.pharmaciesmanager.app.pharmacy.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PharmacyRepository extends JpaRepository<Pharmacy, Long> {
}
