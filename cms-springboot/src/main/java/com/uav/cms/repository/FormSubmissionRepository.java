package com.uav.cms.repository;

import com.uav.cms.model.FormSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormSubmissionRepository extends JpaRepository<FormSubmission, Long> {
}
