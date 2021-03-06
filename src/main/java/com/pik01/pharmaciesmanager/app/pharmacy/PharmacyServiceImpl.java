package com.pik01.pharmaciesmanager.app.pharmacy;

import com.pik01.pharmaciesmanager.app.pharmacy.model.Pharmacy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacyServiceImpl implements PharmacyService {
    private PharmacyRepository pharmacyRepository;

    public PharmacyServiceImpl(PharmacyRepository pharmacyRepository) {
        this.pharmacyRepository = pharmacyRepository;
    }

    @Override
    public List<Pharmacy> getAll() {
        return pharmacyRepository.findAllByOrderByAddress_City();
    }

    @Override
    public Pharmacy getPharmacy(Long id) {
        return pharmacyRepository.findOne(id);
    }

    @Override
    public Pharmacy addPharmacy(Pharmacy pharmacy) {
        return pharmacyRepository.save(pharmacy);
    }

    @Override
    public void deletePharmacy(long id) {
        pharmacyRepository.delete(id);
    }
}
