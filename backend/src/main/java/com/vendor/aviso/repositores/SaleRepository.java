package com.vendor.aviso.repositores;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vendor.aviso.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
