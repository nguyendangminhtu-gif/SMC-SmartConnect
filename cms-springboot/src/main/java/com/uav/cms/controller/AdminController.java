package com.uav.cms.controller;

import com.uav.cms.model.AdminUser;
import com.uav.cms.repository.AdminUserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/")
public class AdminController {

    @Autowired
    private AdminUserRepository adminUserRepository;

    @GetMapping({"/admin.html", "/admin", "/admin/"})
    public String adminHtmlRedirect() {
        return "redirect:/admin/login";
    }

    @GetMapping("/admin/login")
    public String loginPage(HttpSession session) {
        if (session.getAttribute("adminId") != null) {
            return "redirect:/admin/dashboard";
        }
        return "login";
    }

    @PostMapping("/admin/login")
    public String doLogin(@RequestParam String username, @RequestParam String password, 
                          HttpSession session, RedirectAttributes redirectAttributes) {
        AdminUser user = adminUserRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            session.setAttribute("adminId", user.getId());
            return "redirect:/admin/dashboard";
        }
        redirectAttributes.addFlashAttribute("error", "Sai tên đăng nhập hoặc mật khẩu!");
        return "redirect:/admin/login";
    }

    @GetMapping("/admin/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/admin/login";
    }

    @GetMapping("/admin/dashboard")
    public String dashboard(HttpSession session, Model model) {
        if (session.getAttribute("adminId") == null) {
            return "redirect:/admin/login";
        }
        return "dashboard";
    }
}
