package com.uav.cms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "contactinfos")
@Data
public class ContactInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String hotline;
    private String phone;
    private String emailSales;
    private String emailTraining;
    private String address;
    private String zaloLink;
    private String facebookLink;
}
