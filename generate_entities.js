const fs = require('fs');
const path = require('path');

const modelsDir = 'd:\\UAV\\cms-springboot\\src\\main\\java\\com\\uav\\cms\\model';
const reposDir = 'd:\\UAV\\cms-springboot\\src\\main\\java\\com\\uav\\cms\\repository';

const entities = [
  { name: 'Banner', fields: ['String page', 'String imageUrl', 'String title', 'String subtitle'] },
  { name: 'AboutUs', fields: ['String sectionName', 'String content', 'String imageUrl'] },
  { name: 'Industry', fields: ['String title', 'String description', 'String imageUrl'] },
  { name: 'Service', fields: ['String title', 'String description', 'String imageUrl', 'String icon'] },
  { name: 'Project', fields: ['String title', 'String description', 'String imageUrl'] },
  { name: 'Partner', fields: ['String name', 'String logoUrl'] },
  { name: 'News', fields: ['String title', 'String content', 'String imageUrl', 'String createdAt'] },
  { name: 'ContactInfo', fields: ['String hotline', 'String phone', 'String emailSales', 'String emailTraining', 'String address', 'String zaloLink', 'String facebookLink'] },
  { name: 'FormSubmission', fields: ['String name', 'String phone', 'String email', 'String needs', 'String createdAt'] },
  { name: 'FormField', fields: ['String fieldName', 'String options'] },
  { name: 'Feedback', fields: ['String studentName', 'Integer rating', 'String comment', 'String avatarUrl'] },
  { name: 'FAQ', fields: ['String question', 'String answer'] }
];

entities.forEach(e => {
  const modelCode = `package com.uav.cms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "${e.name.toLowerCase()}s")
@Data
public class ${e.name} {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
${e.fields.map(f => '    private ' + f + ';').join('\n')}
}
`;
  fs.writeFileSync(path.join(modelsDir, e.name + '.java'), modelCode);

  const repoCode = `package com.uav.cms.repository;

import com.uav.cms.model.${e.name};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ${e.name}Repository extends JpaRepository<${e.name}, Long> {
}
`;
  fs.writeFileSync(path.join(reposDir, e.name + 'Repository.java'), repoCode);
});

// AdminUser repo
const adminRepo = `package com.uav.cms.repository;

import com.uav.cms.model.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminUserRepository extends JpaRepository<AdminUser, Long> {
    AdminUser findByUsername(String username);
}
`;
fs.writeFileSync(path.join(reposDir, 'AdminUserRepository.java'), adminRepo);

console.log('Entities and Repositories generated.');
