package com.pik01.pharmaciesmanager.app.pharmacy;

import com.pik01.pharmaciesmanager.app.pharmacy.model.Pharmacy;

import java.util.List;

public interface PharmacyService {
    List<Pharmacy> getAll();
    Pharmacy getPharmacy(Long id);
    Pharmacy addPharmacy(Pharmacy pharmacy);
    void deletePharmacy(long id);
}
