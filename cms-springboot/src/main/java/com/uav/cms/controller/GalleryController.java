package com.uav.cms.controller;

import com.uav.cms.model.Gallery;
import com.uav.cms.repository.GalleryRepository;
import com.uav.cms.service.FileUploadService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;

@Controller
@RequestMapping("/admin/gallery")
public class GalleryController {

    @Autowired
    private GalleryRepository galleryRepository;

    @Autowired
    private FileUploadService fileUploadService;

    @PostMapping("/save")
    public String save(@RequestParam(required = false) Long id, 
                       @RequestParam String description, 
                       @RequestParam(value = "image", required = false) MultipartFile image,
                       HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        try {
            Gallery item = (id != null) ? galleryRepository.findById(id).orElse(new Gallery()) : new Gallery();
            item.setDescription(description);
            if (image != null && !image.isEmpty()) {
                String imageUrl = fileUploadService.saveFile(image);
                item.setImageUrl(imageUrl);
            }
            galleryRepository.save(item);
            redirectAttributes.addFlashAttribute("success", "Đã lưu hình ảnh!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        return "redirect:/admin/news";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        galleryRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa hình ảnh!");
        return "redirect:/admin/news";
    }
}
