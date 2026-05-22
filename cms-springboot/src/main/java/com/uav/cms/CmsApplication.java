package com.uav.cms;

import com.uav.cms.model.AdminUser;
import com.uav.cms.repository.AdminUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CmsApplication {
    public static void main(String[] args) {
        SpringApplication.run(CmsApplication.class, args);
    }

    @Bean
    public CommandLineRunner dataLoader(AdminUserRepository repo) {
        return args -> {
            if (repo.findByUsername("admin") == null) {
                AdminUser user = new AdminUser();
                user.setUsername("admin");
                user.setPassword("admin123");
                repo.save(user);
            }
        };
    }
}
