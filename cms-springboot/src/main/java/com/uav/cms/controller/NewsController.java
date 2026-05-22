package com.uav.cms.controller;

import com.uav.cms.model.News;
import com.uav.cms.model.Gallery;
import com.uav.cms.repository.NewsRepository;
import com.uav.cms.repository.GalleryRepository;
import com.uav.cms.service.FileUploadService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@Controller
@RequestMapping("/admin/news")
public class NewsController {

    @Autowired
    private NewsRepository newsRepository;
    
    @Autowired
    private GalleryRepository galleryRepository;

    @Autowired
    private FileUploadService fileUploadService;

    @GetMapping
    public String list(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        List<News> items = newsRepository.findAll();
        List<Gallery> galleries = galleryRepository.findAll();
        model.addAttribute("items", items);
        model.addAttribute("galleries", galleries);
        return "news";
    }

    @PostMapping("/save")
    public String save(@RequestParam(required = false) Long id, 
                       @RequestParam String title, 
                       @RequestParam String content, 
                       @RequestParam(required = false) String slug,
                       @RequestParam(required = false) String metaTitle,
                       @RequestParam(required = false) String metaDescription,
                       @RequestParam(required = false) String metaKeywords,
                       @RequestParam(value = "image", required = false) MultipartFile image,
                       HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        try {
            News item;
            if (id != null) {
                item = newsRepository.findById(id).orElse(new News());
            } else {
                item = new News();
                item.setCreatedAt(LocalDate.now().toString());
            }
            item.setTitle(title);
            item.setContent(content);
            item.setSlug(slug);
            item.setMetaTitle(metaTitle);
            item.setMetaDescription(metaDescription);
            item.setMetaKeywords(metaKeywords);
            
            if (image != null && !image.isEmpty()) {
                String imageUrl = fileUploadService.saveFile(image);
                item.setImageUrl(imageUrl);
            }
            
            newsRepository.save(item);
            redirectAttributes.addFlashAttribute("success", "Đã lưu tin tức!");
        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi tải ảnh lên.");
        }
        return "redirect:/admin/news";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        newsRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa tin tức!");
        return "redirect:/admin/news";
    }
}
