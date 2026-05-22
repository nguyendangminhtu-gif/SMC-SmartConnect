package com.uav.cms.controller;

import com.uav.cms.model.Banner;
import com.uav.cms.repository.BannerRepository;
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
@RequestMapping("/admin/banners")
public class BannerController {

    @Autowired
    private BannerRepository bannerRepository;

    @Autowired
    private FileUploadService fileUploadService;

    @GetMapping
    public String listBanners(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        List<Banner> banners = bannerRepository.findAll();
        model.addAttribute("banners", banners);
        return "banners";
    }

    @PostMapping("/save")
    public String saveBanner(@RequestParam(required = false) Long id, @RequestParam String page, @RequestParam String title, 
                            @RequestParam String subtitle, @RequestParam(value = "image", required = false) MultipartFile image,
                            HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        try {
            Banner banner = id != null ? bannerRepository.findById(id).orElse(new Banner()) : new Banner();
            banner.setPage(page);
            banner.setTitle(title);
            banner.setSubtitle(subtitle);
            
            if (image != null && !image.isEmpty()) {
                String imageUrl = fileUploadService.saveFile(image);
                banner.setImageUrl(imageUrl);
            }
            
            bannerRepository.save(banner);
            redirectAttributes.addFlashAttribute("success", "Đã lưu banner thành công!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        return "redirect:/admin/banners";
    }

    @PostMapping("/delete/{id}")
    public String deleteBanner(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        bannerRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa banner!");
        return "redirect:/admin/banners";
    }
}
