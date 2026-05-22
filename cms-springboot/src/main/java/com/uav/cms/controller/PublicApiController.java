package com.uav.cms.controller;

import com.uav.cms.model.*;
import com.uav.cms.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Cho phép truy cập từ bất kỳ domain nào (vì proxy qua Nginx hoặc localhost)
public class PublicApiController {

    @Autowired private BannerRepository bannerRepository;
    @Autowired private AboutUsRepository aboutUsRepository;
    @Autowired private IndustryRepository industryRepository;
    @Autowired private ServiceRepository serviceRepository;
    @Autowired private ProjectRepository projectRepository;
    @Autowired private PartnerRepository partnerRepository;
    @Autowired private NewsRepository newsRepository;
    @Autowired private ContactInfoRepository contactInfoRepository;
    @Autowired private FAQRepository faqRepository;
    @Autowired private FormFieldRepository formFieldRepository;
    @Autowired private FormSubmissionRepository formSubmissionRepository;

    @GetMapping("/banners")
    public List<Banner> getBanners() {
        return bannerRepository.findAll();
    }

    @GetMapping("/about")
    public List<AboutUs> getAboutUs() {
        return aboutUsRepository.findAll();
    }

    @Autowired private IndustrySectionRepository industrySectionRepository;

    @GetMapping("/industry-sections/{code}")
    public List<IndustrySection> getIndustrySections(@PathVariable String code) {
        return industrySectionRepository.findByIndustryCodeOrderByDisplayOrderAsc(code.toUpperCase());
    }

    @GetMapping("/industries")
    public List<Industry> getIndustries() {
        return industryRepository.findAll();
    }

    @GetMapping("/services")
    public List<Service> getServices() {
        return serviceRepository.findAll();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/partners")
    public List<Partner> getPartners() {
        return partnerRepository.findAll();
    }

    @Autowired private GalleryRepository galleryRepository;

    @GetMapping("/news")
    public List<News> getNews() {
        return newsRepository.findAll();
    }

    @GetMapping("/gallery")
    public List<Gallery> getGallery() {
        return galleryRepository.findAll();
    }

    @GetMapping("/contact")
    public Map<String, Object> getContactAndFaqs() {
        Map<String, Object> response = new HashMap<>();
        List<ContactInfo> infos = contactInfoRepository.findAll();
        response.put("info", infos.isEmpty() ? null : infos.get(0));
        response.put("faqs", faqRepository.findAll());
        return response;
    }

    @GetMapping("/form-fields")
    public List<FormField> getFormFields() {
        return formFieldRepository.findAll();
    }

    @PostMapping("/forms/submit")
    public ResponseEntity<Map<String, String>> submitForm(@RequestBody FormSubmission request) {
        request.setCreatedAt(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        formSubmissionRepository.save(request);
        
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Cảm ơn bạn đã đăng ký khảo sát!");
        return ResponseEntity.ok(response);
    }
}
