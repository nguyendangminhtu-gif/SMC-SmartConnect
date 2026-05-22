const bcrypt = require('bcryptjs');
const { sequelize, AdminUser, FormField, ContactInfo } = require('./models');

async function seed() {
  await sequelize.sync({ force: true }); // Reset DB

  const hashedPassword = await bcrypt.hash('admin123', 10);
  await AdminUser.create({
    username: 'admin',
    password: hashedPassword
  });

  await FormField.create({
    field_name: 'nhu_cau_hoc',
    options_json: JSON.stringify(['Đào tạo cấp phép bay', 'Khảo sát lập bản đồ', 'Nông nghiệp thông minh', 'Quay phim truyền thông', 'Khác'])
  });

  await ContactInfo.bulkCreate([
    { key: 'hotline', value: '1900 638 939 (Nhánh 2)', link: 'tel:1900638939' },
    { key: 'sdt', value: '0902 596 999', link: 'tel:0902596999' },
    { key: 'kinh_doanh', value: 'sales@smartconnect.com.vn', link: 'mailto:sales@smartconnect.com.vn' },
    { key: 'dao_tao', value: 'ktsmc.coltd@gmail.com', link: 'mailto:ktsmc.coltd@gmail.com' },
    { key: 'zalo', value: '0902 596 999', link: 'https://zalo.me/0902596999' },
    { key: 'facebook', value: 'Facebook Page', link: '#' }
  ]);

  console.log('Database seeded successfully.');
}

seed().catch(console.error);
