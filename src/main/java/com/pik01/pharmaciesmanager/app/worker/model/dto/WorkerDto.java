package com.pik01.pharmaciesmanager.app.worker.model.dto;

import com.pik01.pharmaciesmanager.app.worker.model.WorkerRole;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

@Entity
public class WorkerDto {
    @Id
    private Long id;
    private String firstName;
    private String lastName;
    @Enumerated(EnumType.STRING)
    private WorkerRole role;
    private Long workplaceId;

    public void setId(Long id) {
        this.id = id;
    }

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

    public WorkerRole getRole() {
        return role;
    }

    public void setRole(WorkerRole role) {
        this.role = role;
    }

    public Long getWorkplaceId() {
        return workplaceId;
    }

    public void setWorkplaceId(Long workplaceId) {
        this.workplaceId = workplaceId;
    }
}