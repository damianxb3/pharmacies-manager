package com.pik01.pharmaciesmanager.app.sale.model;

import javax.persistence.Embeddable;

@Embeddable
public class DoctorInfo {
    private String firstName;
    private String lastName;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
