package com.uav.cms.controller;

import com.uav.cms.model.ContactInfo;
import com.uav.cms.model.FAQ;
import com.uav.cms.repository.ContactInfoRepository;
import com.uav.cms.repository.FAQRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequestMapping("/admin/contact")
public class ContactController {

    @Autowired
    private ContactInfoRepository contactInfoRepository;

    @Autowired
    private FAQRepository faqRepository;

    @GetMapping
    public String list(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        List<ContactInfo> infos = contactInfoRepository.findAll();
        ContactInfo info = infos.isEmpty() ? new ContactInfo() : infos.get(0);
        model.addAttribute("info", info);
        
        List<FAQ> faqs = faqRepository.findAll();
        model.addAttribute("faqs", faqs);
        
        return "contact";
    }

    @PostMapping("/info/save")
    public String saveInfo(@ModelAttribute ContactInfo info, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        
        contactInfoRepository.save(info);
        redirectAttributes.addFlashAttribute("success", "Đã lưu thông tin liên hệ!");
        return "redirect:/admin/contact";
    }

    @PostMapping("/faq/save")
    public String saveFaq(@RequestParam(required = false) Long id, 
                          @RequestParam String question, 
                          @RequestParam String answer,
                          HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        
        FAQ faq = id != null ? faqRepository.findById(id).orElse(new FAQ()) : new FAQ();
        faq.setQuestion(question);
        faq.setAnswer(answer);
        faqRepository.save(faq);
        
        redirectAttributes.addFlashAttribute("success", "Đã lưu câu hỏi thường gặp!");
        return "redirect:/admin/contact";
    }

    @PostMapping("/faq/delete/{id}")
    public String deleteFaq(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        faqRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa câu hỏi!");
        return "redirect:/admin/contact";
    }
}
