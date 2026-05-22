package com.uav.cms.controller;

import com.uav.cms.model.Service;
import com.uav.cms.repository.ServiceRepository;
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
@RequestMapping("/admin/services")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private FileUploadService fileUploadService;

    @GetMapping
    public String list(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        List<Service> items = serviceRepository.findAll();
        model.addAttribute("items", items);
        return "services";
    }

    @PostMapping("/save")
    public String save(@RequestParam(required = false) Long id, 
                       @RequestParam String title, 
                       @RequestParam String description, 
                       @RequestParam String icon,
                       @RequestParam(required = false) String content,
                       @RequestParam(required = false) String slug,
                       @RequestParam(required = false) String metaTitle,
                       @RequestParam(required = false) String metaDescription,
                       @RequestParam(required = false) String metaKeywords,
                       @RequestParam(value = "image", required = false) MultipartFile image,
                       HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        try {
            Service item;
            if (id != null) {
                item = serviceRepository.findById(id).orElse(new Service());
            } else {
                item = new Service();
            }
            item.setTitle(title);
            item.setDescription(description);
            item.setIcon(icon);
            item.setContent(content);
            item.setSlug(slug);
            item.setMetaTitle(metaTitle);
            item.setMetaDescription(metaDescription);
            item.setMetaKeywords(metaKeywords);
            
            if (image != null && !image.isEmpty()) {
                String imageUrl = fileUploadService.saveFile(image);
                item.setImageUrl(imageUrl);
            }
            
            serviceRepository.save(item);
            redirectAttributes.addFlashAttribute("success", "Đã lưu dịch vụ!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        return "redirect:/admin/services";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        serviceRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa dịch vụ!");
        return "redirect:/admin/services";
    }
}
