package com.pik01.pharmaciesmanager.app.sale.model;

import com.pik01.pharmaciesmanager.app.worker.model.Worker;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime date;
    private BigDecimal value;

    @ManyToOne(fetch = FetchType.LAZY)
    private Worker seller;

    public Long getId() {
        return id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public Worker getSeller() {
        return seller;
    }

    public void setSeller(Worker seller) {
        this.seller = seller;
    }
}