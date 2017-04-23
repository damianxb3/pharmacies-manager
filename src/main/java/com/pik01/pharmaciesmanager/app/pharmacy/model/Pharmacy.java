package com.pik01.pharmaciesmanager.app.pharmacy.model;

import com.pik01.pharmaciesmanager.app.shared.model.Address;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pharmacy {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Address pharmacyAddress;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Address getPharmacyAddress() {
        return pharmacyAddress;
    }

    public void setPharmacyAddress(Address pharmacyAddress) {
        this.pharmacyAddress = pharmacyAddress;
    }
}
