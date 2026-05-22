package com.uav.cms.repository;

import com.uav.cms.model.AboutUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AboutUsRepository extends JpaRepository<AboutUs, Long> {
}
