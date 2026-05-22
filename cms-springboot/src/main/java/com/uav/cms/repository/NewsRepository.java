package com.uav.cms.repository;

import com.uav.cms.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    News findBySlug(String slug);
}
