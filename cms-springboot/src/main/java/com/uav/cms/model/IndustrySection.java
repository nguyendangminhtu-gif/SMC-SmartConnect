package com.uav.cms.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "industry_sections")
@Data
public class IndustrySection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String industryCode; // e.g. DIA_OC, XAY_DUNG, TAM_LOP, NANG_LUONG
    private String sectionType; // FIXED, DYNAMIC_BLOCK
    
    private String title;
    private String subtitle;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    private String imageUrl1;
    private String imageUrl2;
    private String imageUrl3;
    
    private Integer displayOrder;
}
