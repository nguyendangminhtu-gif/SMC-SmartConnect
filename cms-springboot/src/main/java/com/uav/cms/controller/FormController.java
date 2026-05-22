package com.uav.cms.controller;

import com.uav.cms.model.FormField;
import com.uav.cms.model.FormSubmission;
import com.uav.cms.repository.FormFieldRepository;
import com.uav.cms.repository.FormSubmissionRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequestMapping("/admin/forms")
public class FormController {

    @Autowired
    private FormSubmissionRepository formSubmissionRepository;
    
    @Autowired
    private FormFieldRepository formFieldRepository;

    @GetMapping
    public String listForms(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        List<FormSubmission> submissions = formSubmissionRepository.findAll();
        List<FormField> fields = formFieldRepository.findAll();
        
        model.addAttribute("submissions", submissions);
        model.addAttribute("fields", fields);
        return "forms";
    }

    @PostMapping("/fields/save")
    public String saveField(@RequestParam(required = false) Long id, @RequestParam String fieldName, @RequestParam String options, 
                           HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        
        FormField field = id != null ? formFieldRepository.findById(id).orElse(new FormField()) : new FormField();
        field.setFieldName(fieldName);
        field.setOptions(options);
        formFieldRepository.save(field);
        
        redirectAttributes.addFlashAttribute("success", "Đã lưu mục form!");
        return "redirect:/admin/forms";
    }

    @PostMapping("/fields/delete/{id}")
    public String deleteField(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        if (session.getAttribute("adminId") == null) return "redirect:/admin/login";
        formFieldRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa mục!");
        return "redirect:/admin/forms";
    }
}
