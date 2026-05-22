package com.uav.cms.repository;

import com.uav.cms.model.FormField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormFieldRepository extends JpaRepository<FormField, Long> {
}
