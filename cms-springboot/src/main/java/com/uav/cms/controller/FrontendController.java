package com.uav.cms.controller;

import com.uav.cms.model.Industry;
import com.uav.cms.model.News;
import com.uav.cms.model.Service;
import com.uav.cms.repository.IndustryRepository;
import com.uav.cms.repository.NewsRepository;
import com.uav.cms.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class FrontendController {

    @Autowired
    private ServiceRepository serviceRepository;
    
    @Autowired
    private IndustryRepository industryRepository;
    
    @Autowired
    private NewsRepository newsRepository;

    @GetMapping("/")
    public String index(Model model) {
        return "frontend/index";
    }

    @GetMapping("/chung-toi-la-ai")
    public String aboutUs() {
        return "frontend/chung-toi-la-ai";
    }

    @GetMapping("/chung-toi-lam-gi")
    public String whatWeDo() {
        return "frontend/chung-toi-lam-gi";
    }

    @GetMapping("/doi-tac")
    public String partners() {
        return "frontend/doi-tac";
    }

    @GetMapping("/tin-tuc")
    public String newsList(Model model) {
        model.addAttribute("news", newsRepository.findAll());
        return "frontend/tin-tuc";
    }

    @GetMapping("/tin-tuc.html")
    public String newsListLegacy(Model model) {
        return newsList(model);
    }

    @GetMapping("/{slug}.html")
    public String genericDetail(@PathVariable String slug, Model model) {
        // Try to find in Services
        Service service = serviceRepository.findBySlug(slug);
        if (service != null) {
            model.addAttribute("item", service);
            model.addAttribute("type", "Dịch vụ");
            return "frontend/detail";
        }
        
        // Try to find in Industries
        Industry industry = industryRepository.findBySlug(slug);
        if (industry != null) {
            model.addAttribute("item", industry);
            model.addAttribute("type", "Lĩnh vực");
            return "frontend/detail";
        }
        
        // Try to find in News
        News news = newsRepository.findBySlug(slug);
        if (news != null) {
            model.addAttribute("item", news);
            model.addAttribute("type", "Tin tức");
            return "frontend/detail";
        }
        
        // Specific static pages mappings
        if (slug.equals("chung-toi-la-ai")) return "frontend/chung-toi-la-ai";
        if (slug.equals("chung-toi-lam-gi")) return "frontend/chung-toi-lam-gi";
        if (slug.equals("doi-tac")) return "frontend/doi-tac";
        
        return "redirect:/";
    }
}
