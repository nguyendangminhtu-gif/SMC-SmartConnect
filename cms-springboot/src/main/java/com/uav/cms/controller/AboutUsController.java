package com.uav.cms.controller;

import com.uav.cms.model.AboutUs;
import com.uav.cms.repository.AboutUsRepository;
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
@RequestMapping("/admin/about")
public class AboutUsController {

    @Autowired
    private AboutUsRepository aboutUsRepository;

    @Autowired
    private FileUploadService fileUploadService;

    @GetMapping
    public String listAboutUs(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        List<AboutUs> sections = aboutUsRepository.findAll();
        model.addAttribute("sections", sections);
        return "about";
    }

    @PostMapping("/save")
    public String saveSection(@RequestParam(required = false) Long id, 
                              @RequestParam String sectionName, 
                              @RequestParam String content, 
                              @RequestParam(value = "image", required = false) MultipartFile image,
                              HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        try {
            AboutUs aboutUs;
            if (id != null) {
                aboutUs = aboutUsRepository.findById(id).orElse(new AboutUs());
            } else {
                aboutUs = new AboutUs();
            }
            aboutUs.setSectionName(sectionName);
            aboutUs.setContent(content);
            
            if (image != null && !image.isEmpty()) {
                String imageUrl = fileUploadService.saveFile(image);
                aboutUs.setImageUrl(imageUrl);
            }
            
            aboutUsRepository.save(aboutUs);
            redirectAttributes.addFlashAttribute("success", "Đã lưu nội dung!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        return "redirect:/admin/about";
    }

    @PostMapping("/delete/{id}")
    public String deleteSection(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        aboutUsRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa nội dung!");
        return "redirect:/admin/about";
    }
}
