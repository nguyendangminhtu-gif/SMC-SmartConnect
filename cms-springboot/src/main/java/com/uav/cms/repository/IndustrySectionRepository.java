package com.uav.cms.repository;

import com.uav.cms.model.IndustrySection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IndustrySectionRepository extends JpaRepository<IndustrySection, Long> {
    List<IndustrySection> findByIndustryCodeOrderByDisplayOrderAsc(String industryCode);
}
