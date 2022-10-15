package com.vendor.aviso.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.vendor.aviso.entities.Sale;
import com.vendor.aviso.repositores.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	public Page<Sale> findSales(String minDate, String maxDAte,Pageable pageable){
		
		LocalDate hoje = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? hoje.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDAte.equals("") ? hoje : LocalDate.parse(maxDAte);
		return repository.findSales( min, max, pageable);
	}
}
