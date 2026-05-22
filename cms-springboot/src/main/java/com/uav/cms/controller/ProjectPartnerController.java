package com.uav.cms.controller;

import com.uav.cms.model.Partner;
import com.uav.cms.model.Project;
import com.uav.cms.repository.PartnerRepository;
import com.uav.cms.repository.ProjectRepository;
import com.uav.cms.service.FileUploadService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;

@Controller
@RequestMapping("/admin/projects")
public class ProjectPartnerController {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private PartnerRepository partnerRepository;

    @Autowired
    private FileUploadService fileUploadService;

    @GetMapping
    public String list(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        model.addAttribute("projects", projectRepository.findAll());
        model.addAttribute("partners", partnerRepository.findAll());
        return "projects";
    }

    @PostMapping("/project/save")
    public String saveProject(@RequestParam(required = false) Long id, 
                              @RequestParam String title, 
                              @RequestParam String description, 
                              @RequestParam(value = "image", required = false) MultipartFile image,
                              HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        try {
            Project item = id != null ? projectRepository.findById(id).orElse(new Project()) : new Project();
            item.setTitle(title);
            item.setDescription(description);
            if (image != null && !image.isEmpty()) {
                item.setImageUrl(fileUploadService.saveFile(image));
            }
            projectRepository.save(item);
            redirectAttributes.addFlashAttribute("success", "Đã lưu dự án!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        return "redirect:/admin/projects";
    }

    @PostMapping("/project/delete/{id}")
    public String deleteProject(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        projectRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa dự án!");
        return "redirect:/admin/projects";
    }

    @PostMapping("/partner/save")
    public String savePartner(@RequestParam(required = false) Long id, 
                              @RequestParam String name, 
                              @RequestParam(value = "logo", required = false) MultipartFile logo,
                              HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        try {
            Partner item = id != null ? partnerRepository.findById(id).orElse(new Partner()) : new Partner();
            item.setName(name);
            if (logo != null && !logo.isEmpty()) {
                item.setLogoUrl(fileUploadService.saveFile(logo));
            }
            partnerRepository.save(item);
            redirectAttributes.addFlashAttribute("success", "Đã lưu đối tác!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải logo lên.");
        }
        return "redirect:/admin/projects";
    }

    @PostMapping("/partner/delete/{id}")
    public String deletePartner(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        partnerRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa đối tác!");
        return "redirect:/admin/projects";
    }
}
