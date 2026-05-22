package com.uav.cms.controller;

import com.uav.cms.model.IndustrySection;
import com.uav.cms.repository.IndustrySectionRepository;
import com.uav.cms.service.FileUploadService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/admin/industries")
public class IndustryController {

    @Autowired
    private IndustrySectionRepository sectionRepository;

    @Autowired
    private FileUploadService fileUploadService;

    @GetMapping
    public String list(HttpSession session, Model model, @RequestParam(defaultValue = "DIA_OC") String tab) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        
        List<IndustrySection> diaOc = sectionRepository.findByIndustryCodeOrderByDisplayOrderAsc("DIA_OC");
        List<IndustrySection> xayDung = sectionRepository.findByIndustryCodeOrderByDisplayOrderAsc("XAY_DUNG");
        List<IndustrySection> tamLop = sectionRepository.findByIndustryCodeOrderByDisplayOrderAsc("TAM_LOP");
        List<IndustrySection> nangLuong = sectionRepository.findByIndustryCodeOrderByDisplayOrderAsc("NANG_LUONG");
        
        model.addAttribute("diaOc", diaOc.isEmpty() ? new IndustrySection() : diaOc.get(0));
        model.addAttribute("nangLuong", nangLuong.isEmpty() ? new IndustrySection() : nangLuong.get(0));
        model.addAttribute("xayDung", xayDung);
        model.addAttribute("tamLop", tamLop);
        model.addAttribute("activeTab", tab);
        
        return "industries";
    }

    @PostMapping("/saveFixed")
    public String saveFixed(@RequestParam String industryCode,
                            @RequestParam(required = false) Long id,
                            @RequestParam(required = false) String title,
                            @RequestParam(required = false) String content,
                            @RequestParam(value = "image1", required = false) MultipartFile image1,
                            @RequestParam(value = "image2", required = false) MultipartFile image2,
                            @RequestParam(value = "image3", required = false) MultipartFile image3,
                            HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        
        try {
            IndustrySection section;
            if (id != null) {
                section = sectionRepository.findById(id).orElse(new IndustrySection());
            } else {
                section = new IndustrySection();
            }
            
            section.setIndustryCode(industryCode);
            section.setSectionType("FIXED");
            section.setTitle(title);
            section.setContent(content);
            section.setDisplayOrder(0);
            
            if (image1 != null && !image1.isEmpty()) {
                section.setImageUrl1(fileUploadService.saveFile(image1));
            }
            if (image2 != null && !image2.isEmpty()) {
                section.setImageUrl2(fileUploadService.saveFile(image2));
            }
            if (image3 != null && !image3.isEmpty()) {
                section.setImageUrl3(fileUploadService.saveFile(image3));
            }
            
            sectionRepository.save(section);
            redirectAttributes.addFlashAttribute("success", "Đã cập nhật thông tin thành công!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        
        return "redirect:/admin/industries?tab=" + industryCode;
    }

    @PostMapping("/saveDynamic")
    public String saveDynamic(@RequestParam String industryCode,
                              @RequestParam(required = false) Long id,
                              @RequestParam(required = false) String title,
                              @RequestParam(required = false) String subtitle,
                              @RequestParam(required = false) String content,
                              @RequestParam(defaultValue = "0") Integer displayOrder,
                              @RequestParam(value = "image1", required = false) MultipartFile image1,
                              @RequestParam(value = "image2", required = false) MultipartFile image2,
                              @RequestParam(value = "image3", required = false) MultipartFile image3,
                              HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        
        try {
            IndustrySection section;
            if (id != null) {
                section = sectionRepository.findById(id).orElse(new IndustrySection());
            } else {
                section = new IndustrySection();
            }
            
            section.setIndustryCode(industryCode);
            section.setSectionType("DYNAMIC_BLOCK");
            section.setTitle(title);
            section.setSubtitle(subtitle);
            section.setContent(content);
            section.setDisplayOrder(displayOrder);
            
            if (image1 != null && !image1.isEmpty()) {
                section.setImageUrl1(fileUploadService.saveFile(image1));
            }
            if (image2 != null && !image2.isEmpty()) {
                section.setImageUrl2(fileUploadService.saveFile(image2));
            }
            if (image3 != null && !image3.isEmpty()) {
                section.setImageUrl3(fileUploadService.saveFile(image3));
            }
            
            sectionRepository.save(section);
            redirectAttributes.addFlashAttribute("success", "Đã lưu khối nội dung thành công!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        
        return "redirect:/admin/industries?tab=" + industryCode;
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id, @RequestParam String tab, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        sectionRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa nội dung!");
        return "redirect:/admin/industries?tab=" + tab;
    }
}
