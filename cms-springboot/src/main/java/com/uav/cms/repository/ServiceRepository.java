package com.uav.cms.repository;

import com.uav.cms.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    Service findBySlug(String slug);
}
