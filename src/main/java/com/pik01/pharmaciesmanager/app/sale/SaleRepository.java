package com.pik01.pharmaciesmanager.app.sale;

import com.pik01.pharmaciesmanager.app.sale.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
