package com.uav.cms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "industrys")
@Data
public class Industry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String description;
    
    @jakarta.persistence.Column(columnDefinition = "TEXT")
    private String content;
    
    private String imageUrl;
    
    private String slug;
    private String metaTitle;
    private String metaDescription;
    private String metaKeywords;
}
