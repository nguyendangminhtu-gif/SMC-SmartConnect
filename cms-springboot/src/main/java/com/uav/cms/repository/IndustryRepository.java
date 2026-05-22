package com.uav.cms.repository;

import com.uav.cms.model.Industry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndustryRepository extends JpaRepository<Industry, Long> {
    Industry findBySlug(String slug);
}
