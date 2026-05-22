package com.uav.cms.config;

import com.uav.cms.model.*;
import com.uav.cms.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private BannerRepository bannerRepo;
    
    @Autowired
    private ContactInfoRepository contactRepo;
    
    @Autowired
    private FAQRepository faqRepo;
    
    @Autowired
    private NewsRepository newsRepo;
    
    @Autowired
    private FormFieldRepository formFieldRepo;
    
    @Autowired
    private ServiceRepository serviceRepo;
    
    @Autowired
    private AboutUsRepository aboutRepo;
    
    @Autowired
    private IndustryRepository industryRepo;
    
    @Autowired
    private IndustrySectionRepository industrySectionRepo;
    
    @Autowired
    private GalleryRepository galleryRepo;

    @Autowired
    private ProjectRepository projectRepo;
    
    @Autowired
    private PartnerRepository partnerRepo;

    @Override
    public void run(String... args) throws Exception {
        seedContactInfo();
        seedFAQs();
        seedFormFields();
        seedServices();
        seedBanners();
        seedAboutSections();
        seedIndustries();
        seedIndustrySections();
        seedNews();
        seedProjects();
        seedPartners();
    }

    private void seedProjects() {
        if (projectRepo.count() == 0) {
            Project p1 = new Project();
            p1.setTitle("Khảo sát địa hình dự án Cao tốc Bắc Nam");
            p1.setDescription("Sử dụng công nghệ UAV mapping để đo đạc và lập bản đồ 3D cho hơn 50km đường bộ, đảm bảo độ chính xác cao và tiết kiệm thời gian.");
            p1.setImageUrl("images/construction_survey.png");
            
            Project p2 = new Project();
            p2.setTitle("Quay phim quảng cáo Resort Phú Quốc");
            p2.setDescription("Thực hiện các cảnh quay flycam toàn cảnh 4K, mang đến góc nhìn ấn tượng và bao quát toàn bộ khu nghỉ dưỡng cao cấp.");
            p2.setImageUrl("images/commercial_aerial.png");

            Project p3 = new Project();
            p3.setTitle("Kiểm tra lưới điện cao thế EVN");
            p3.setDescription("Ứng dụng drone tích hợp camera nhiệt để kiểm tra an toàn lưới điện cao thế mà không cần cắt điện, giảm thiểu rủi ro.");
            p3.setImageUrl("images/uav_mission.png");

            Project p4 = new Project();
            p4.setTitle("Lập bản đồ 3D Khu đô thị Vinhomes");
            p4.setDescription("Bay quét LiDAR và xây dựng mô hình 3D cho quy hoạch khu đô thị, giúp chủ đầu tư dễ dàng quản lý và giám sát tiến độ.");
            p4.setImageUrl("images/landmark_skyscraper.png");

            Project p5 = new Project();
            p5.setTitle("Phun thuốc nông nghiệp cánh đồng mẫu lớn");
            p5.setDescription("Sử dụng máy bay không người lái nông nghiệp để phun thuốc bảo vệ thực vật trên diện tích 100 hecta tại Cần Thơ.");
            p5.setImageUrl("images/instructor_tech.png");

            Project p6 = new Project();
            p6.setTitle("Khảo sát môi trường diễn biến bờ biển");
            p6.setDescription("Chụp ảnh và theo dõi sự thay đổi của đường bờ biển theo thời gian thực, phục vụ nghiên cứu và phòng chống thiên tai.");
            p6.setImageUrl("images/uav_vision.png");

            projectRepo.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6));
        }
    }

    private void seedPartners() {
        if (partnerRepo.count() == 0) {
            Partner pt1 = new Partner();
            pt1.setName("Tập đoàn Vingroup");
            pt1.setLogoUrl("images/logo.png");
            
            Partner pt2 = new Partner();
            pt2.setName("Tập đoàn Điện lực Việt Nam (EVN)");
            pt2.setLogoUrl("images/logo.png");

            Partner pt3 = new Partner();
            pt3.setName("Bộ Giao thông Vận tải");
            pt3.setLogoUrl("images/logo.png");

            Partner pt4 = new Partner();
            pt4.setName("Tập đoàn Novaland");
            pt4.setLogoUrl("images/logo.png");

            Partner pt5 = new Partner();
            pt5.setName("Công ty CP Tập đoàn Đèo Cả");
            pt5.setLogoUrl("images/logo.png");

            Partner pt6 = new Partner();
            pt6.setName("Đại học Bách Khoa TP.HCM");
            pt6.setLogoUrl("images/logo.png");

            partnerRepo.saveAll(Arrays.asList(pt1, pt2, pt3, pt4, pt5, pt6));
        }
    }

    private void seedContactInfo() {
        if (contactRepo.count() == 0) {
            ContactInfo info = new ContactInfo();
            info.setHotline("0902 596 999");
            info.setPhone("0902 596 999");
            info.setEmailSales("sales@smartconnect.com.vn");
            info.setEmailTraining("ktsmc.coltd@gmail.com");
            info.setAddress("Việt Nam");
            info.setFacebookLink("#");
            info.setZaloLink("https://zalo.me/0902596999");
            contactRepo.save(info);
        }
    }

    private void seedFAQs() {
        if (faqRepo.count() == 0) {
            FAQ faq1 = new FAQ();
            faq1.setQuestion("Khóa học kéo dài trong bao lâu?");
            faq1.setAnswer("Tùy thuộc vào gói đào tạo (Cơ bản hay Nâng cao), thời gian học dao động từ 3 ngày đến 1 tuần, bao gồm cả lý thuyết và thực hành. Lịch học có thể sắp xếp linh hoạt vào cuối tuần cho người đi làm.");
            faqRepo.save(faq1);

            FAQ faq2 = new FAQ();
            faq2.setQuestion("Tôi chưa có máy bay UAV thì có đăng ký học được không?");
            faq2.setAnswer("Hoàn toàn được! Trung tâm SMC sẽ cung cấp toàn bộ thiết bị (UAV chuyên dụng) để bạn thực hành trong suốt quá trình học. Bạn không cần phải mua trước máy bay.");
            faqRepo.save(faq2);

            FAQ faq3 = new FAQ();
            faq3.setQuestion("Học phí bao nhiêu? Có hỗ trợ chi phí thi chứng chỉ không?");
            faq3.setAnswer("Học phí phụ thuộc vào nhu cầu (Nông nghiệp, Quay phim hay Trắc địa). Chúng tôi có gói Combo bao gồm trọn gói chi phí đào tạo và lệ phí hỗ trợ làm hồ sơ thi chứng chỉ. Vui lòng điền form tư vấn ở đầu trang để được báo giá chi tiết.");
            faqRepo.save(faq3);
        }
    }

    private void seedFormFields() {
        if (formFieldRepo.count() == 0) {
            FormField field = new FormField();
            field.setFieldName("Nhu cầu học của bạn?");
            field.setOptions("Đào tạo lái UAV, Thi chứng chỉ, Ứng dụng nông nghiệp, Khảo sát – Mapping, Quay phim – Truyền thông");
            formFieldRepo.save(field);
        }
    }

    private void seedServices() {
        if (serviceRepo.count() == 0) {
            List<Service> services = Arrays.asList(
                createService("ĐÀO TẠO BAY UAV CƠ BẢN - NÂNG CAO", "Hỗ trợ thủ tục nhanh, đúng quy định", "fa-solid fa-graduation-cap", "dao-tao-cap-phep.html"),
                createService("SÁT HẠCH & CẤP PHÉP UAV", "Quy trình bài bản, đảm bảo đạt chuẩn", "fa-solid fa-clipboard-check", "sat-hach-cap-phep.html"),
                createService("ỨNG DỤNG UAV NÔNG NGHIỆP", "Phun thuốc, rải phân, giám sát cây trồng", "fa-solid fa-seedling", "ung-dung-nong-nghiep.html"),
                createService("KHẢO SÁT – MAPPING LẬP BẢN ĐỒ", "Chính xác – Nhanh chóng – Hiệu quả", "fa-solid fa-map-location-dot", "khao-sat-mapping.html"),
                createService("QUAY PHIM SỰ KIỆN – TRUYỀN THÔNG", "Hình ảnh chất lượng cao, chuyên nghiệp", "fa-solid fa-bullhorn", "quay-phim-su-kien.html"),
                createService("CUNG CẤP UAV CHÍNH HÃNG", "Đa dạng chủng loại, bảo hành uy tín", "fa-solid fa-box", "cung-cap-uav.html")
            );
            serviceRepo.saveAll(services);
        } else {
            // Migration: update existing services with content if missing
            List<Service> services = serviceRepo.findAll();
            for (Service s : services) {
                if (s.getContent() == null || s.getContent().isEmpty()) {
                    String filename = getFilenameForService(s.getTitle());
                    if (filename != null) {
                        s.setContent(readContentFromFile(filename));
                        s.setSlug(filename.replace(".html", ""));
                        serviceRepo.save(s);
                    }
                }
            }
        }
    }

    private String getFilenameForService(String title) {
        if (title.contains("ĐÀO TẠO")) return "dao-tao-cap-phep.html";
        if (title.contains("SÁT HẠCH")) return "sat-hach-cap-phep.html";
        if (title.contains("NÔNG NGHIỆP")) return "ung-dung-nong-nghiep.html";
        if (title.contains("KHẢO SÁT")) return "khao-sat-mapping.html";
        if (title.contains("QUAY PHIM")) return "quay-phim-su-kien.html";
        if (title.contains("CUNG CẤP")) return "cung-cap-uav.html";
        return null;
    }

    private String readContentFromFile(String fileName) {
        try {
            String os = System.getProperty("os.name").toLowerCase();
            String path = os.contains("win") ? "d:/UAV/" + fileName : "/var/www/daotaouav.io.vn/" + fileName;
            String content = new String(java.nio.file.Files.readAllBytes(java.nio.file.Paths.get(path)), java.nio.charset.StandardCharsets.UTF_8);
            
            // Try extracting from old format
            int start = content.indexOf("<header class=\"page-header\">");
            int end = content.indexOf("</section>");
            if (start != -1 && end != -1) {
                return content.substring(start, end + 10);
            }
            
            // Try extracting from news format
            start = content.indexOf("<div class=\"news-detail-content\">");
            if (start != -1) {
                end = content.indexOf("</div>", start);
                if (end != -1) {
                    return content.substring(start + 33, end).trim();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    private Service createService(String title, String desc, String icon, String filename) {
        Service s = new Service();
        s.setTitle(title);
        s.setDescription(desc);
        s.setIcon(icon);
        s.setSlug(filename.replace(".html", ""));
        s.setContent(readContentFromFile(filename));
        return s;
    }

    private void seedBanners() {
        if (bannerRepo.count() == 0) {
            Banner b = new Banner();
            b.setPage("Trang chủ");
            b.setTitle("HỌC & THI CHỨNG CHỈ UAV/DRONE");
            b.setSubtitle("Đào tạo bài bản – Hỗ trợ thi chứng chỉ – Ứng dụng thực tế");
            b.setImageUrl("images/hero.png");
            bannerRepo.save(b);
        }
    }

    private void seedAboutSections() {
        if (aboutRepo.count() < 3) {
            aboutRepo.deleteAll();
            AboutUs a1 = new AboutUs();
            a1.setSectionName("Về Đơn vị chủ quản SMC");
            a1.setContent("Trung tâm Đào tạo Công nghệ SMC trực thuộc Công ty TNHH Công nghệ Smartconnect - Doanh nghiệp hoạt động mạnh mẽ trong lĩnh vực công nghệ, cung cấp giải pháp tự động hóa, IoT, AI và hệ sinh thái \"Thành phố thông minh\" (Smart City) tại Việt Nam.\n\nViệc thành lập trung tâm UAV là bước mở rộng chiến lược, kết hợp nền tảng công nghệ sẵn có với các nhu cầu thực tế mang đến trải nghiệm học tập chuẩn mực và hiện đại nhất.");
            aboutRepo.save(a1);

            AboutUs a2 = new AboutUs();
            a2.setSectionName("Tầm nhìn");
            a2.setContent("<p>Trở thành biểu tượng dẫn đầu tại Việt Nam và khu vực trong việc cung cấp giải pháp công nghệ, dịch vụ kỹ thuật và hệ thống đào tạo phi công vận hành thiết bị bay không người lái (UAV).</p><p>SMC SmartConnect cam kết nâng tầm vị thế công nghệ Việt thông qua các chương trình đào tạo chuẩn quốc tế và các giải pháp ứng dụng drone thực tế, giúp nâng cao vượt trội hiệu suất làm việc và giải phóng sức lao động trong mọi lĩnh vực kinh tế - xã hội.</p>");
            a2.setImageUrl("images/uav_vision.png");
            aboutRepo.save(a2);

            AboutUs a3 = new AboutUs();
            a3.setSectionName("Sứ mệnh");
            a3.setContent("<p>Đồng hành cùng cá nhân và doanh nghiệp Việt Nam trong tiến trình tiếp cận, làm chủ và ứng dụng an toàn công nghệ UAV vào đời sống sản xuất.</p><p>Chúng tôi mang lại nền tảng kiến thức pháp lý vững vàng, kỹ năng thực hành bay bài bản chuẩn quốc phòng và các giải pháp dữ liệu chính xác nhất, góp phần hiện đại hóa nông nghiệp xanh bền vững và số hóa thông minh các công trình công nghiệp Việt Nam.</p>");
            a3.setImageUrl("images/uav_mission.png");
            aboutRepo.save(a3);
        }
    }
    
    private void seedIndustries() {
        if (industryRepo.count() == 0) {
            List<Industry> inds = Arrays.asList(
                createIndustry("Lĩnh vực Địa ốc", "linh-vuc-dia-oc.html"),
                createIndustry("Lĩnh vực Xây dựng", "linh-vuc-xay-dung.html"),
                createIndustry("Lĩnh vực Tấm lợp", "linh-vuc-tam-lop.html"),
                createIndustry("Lĩnh vực Năng lượng", "linh-vuc-nang-luong.html")
            );
            industryRepo.saveAll(inds);
        } else {
            List<Industry> inds = industryRepo.findAll();
            for (Industry i : inds) {
                if (i.getContent() == null || i.getContent().isEmpty()) {
                    String filename = getFilenameForIndustry(i.getTitle());
                    if (filename != null) {
                        i.setContent(readContentFromFile(filename));
                        i.setSlug(filename.replace(".html", ""));
                        industryRepo.save(i);
                    }
                }
            }
        }
    }
    
    private String getFilenameForIndustry(String title) {
        if (title.contains("Địa ốc")) return "linh-vuc-dia-oc.html";
        if (title.contains("Xây dựng")) return "linh-vuc-xay-dung.html";
        if (title.contains("Tấm lợp")) return "linh-vuc-tam-lop.html";
        if (title.contains("Năng lượng")) return "linh-vuc-nang-luong.html";
        return null;
    }
    
    private Industry createIndustry(String title, String filename) {
        Industry i = new Industry();
        i.setTitle(title);
        i.setSlug(filename.replace(".html", ""));
        i.setContent(readContentFromFile(filename));
        return i;
    }
    
    private IndustrySection createSection(String code, String type, String title, String subtitle, String content, String img1, String img2, String img3, int order) {
        IndustrySection s = new IndustrySection();
        s.setIndustryCode(code);
        s.setSectionType(type);
        s.setTitle(title);
        s.setSubtitle(subtitle);
        s.setContent(content);
        s.setImageUrl1(img1);
        s.setImageUrl2(img2);
        s.setImageUrl3(img3);
        s.setDisplayOrder(order);
        return s;
    }

    private void seedIndustrySections() {
        if (industrySectionRepo.count() == 0) {
            // DIA_OC (FIXED)
            industrySectionRepo.save(createSection("DIA_OC", "FIXED", "Sáng tạo và dễ dàng", null, 
                "SMC SmartConnect số hóa dữ liệu bất động sản từ trên cao giúp tối ưu hóa công tác tiếp thị, lập bản đồ hiện trạng và cung cấp tư liệu truyền thông có độ phân giải cực cao cho các nhà đầu tư.", 
                "images/commercial_aerial.png", "images/landmark_skyscraper.png", "images/residence_aerial.png", 0));
                
            // XAY_DUNG (DYNAMIC_BLOCK)
            industrySectionRepo.save(createSection("XAY_DUNG", "DYNAMIC_BLOCK", "Tiến độ xây dựng", null, 
                "<p class=\"sub-desc\">SMC SmartConnect ghi nhận trực quan toàn bộ quá trình phát triển của dự án xây dựng từ trên cao...</p>", 
                "images/commercial_aerial.png", "images/residence_aerial.png", "images/uav_vision.png", 1));
            industrySectionRepo.save(createSection("XAY_DUNG", "DYNAMIC_BLOCK", "Thu thập dữ liệu trắc địa có giá trị", null, 
                "<p class=\"sub-desc\">Khảo sát mặt bằng xây dựng bằng UAV giúp đo đạc địa hình nhanh hơn 80%...</p>", 
                "images/construction_survey.png", "images/uav_mission.png", "images/residence_aerial.png", 2));
            industrySectionRepo.save(createSection("XAY_DUNG", "DYNAMIC_BLOCK", "Giao tiếp với các bên liên quan", null, 
                "<p class=\"sub-desc\">Báo cáo tiến độ bằng không ảnh trực quan sinh động là giải pháp hoàn hảo...</p>", 
                "images/hero.png", "images/uav_vision.png", "images/residence_aerial.png", 3));
                
            // TAM_LOP (DYNAMIC_BLOCK)
            industrySectionRepo.save(createSection("TAM_LOP", "DYNAMIC_BLOCK", "Luôn dẫn đầu công nghệ", "ĐỘ AN TOÀN TUYỆT ĐỐI", 
                "<p>Phương pháp đo đạc thủ công yêu cầu công nhân leo lên mái nhà dốc cao vô cùng nguy hiểm...</p>", 
                "images/residence_aerial.png", null, null, 1));
            industrySectionRepo.save(createSection("TAM_LOP", "DYNAMIC_BLOCK", "Tầm năng lượng mặt trời", null, 
                "<p>SMC SmartConnect hỗ trợ các nhà phát triển dự án khảo sát bề mặt mái nhà...</p>", 
                "images/uav_mission.png", null, null, 2));
            industrySectionRepo.save(createSection("TAM_LOP", "DYNAMIC_BLOCK", "Đưa ra quyết định chính xác", "CHẨN ĐOÁN THÔNG MINH", 
                "<p>Từ dữ liệu quét của drone, chúng tôi xuất báo cáo kỹ thuật chi tiết chỉ ra các vị trí nứt rạn...</p>", 
                "images/commercial_aerial.png", null, null, 3));
                
            // NANG_LUONG (FIXED)
            industrySectionRepo.save(createSection("NANG_LUONG", "FIXED", "Năng lượng", null, 
                "", "images/uav_mission.png", "images/uav_vision.png", "images/construction_survey.png", 0));
        }
    }

    private void seedNews() {
        if (newsRepo.count() == 0) {
            News n1 = new News();
            n1.setTitle("Những ví dụ tuyệt vời nhất về máy bay không người lái đang được sử dụng ngày nay");
            n1.setContent(readContentFromFile("tin-tuc-1.html"));
            n1.setImageUrl("images/news-1.png");
            n1.setCreatedAt("2024-11-27");
            n1.setSlug("tin-tuc-1");
            newsRepo.save(n1);

            News n2 = new News();
            n2.setTitle("Các ứng dụng quan trọng của Flycam trong đời sống");
            n2.setContent(readContentFromFile("tin-tuc-2.html"));
            n2.setImageUrl("images/news-2.png");
            n2.setCreatedAt("2024-11-28");
            n2.setSlug("tin-tuc-2");
            newsRepo.save(n2);

            News n3 = new News();
            n3.setTitle("Khảo sát địa hình bằng UAV: Giải pháp thay thế hoàn hảo");
            n3.setContent(readContentFromFile("tin-tuc-3.html"));
            n3.setImageUrl("images/news-3.png");
            n3.setCreatedAt("2024-11-29");
            n3.setSlug("tin-tuc-3");
            newsRepo.save(n3);

            News n4 = new News();
            n4.setTitle("Chứng chỉ điều khiển UAV là gì? Vì sao phải cần đến nó?");
            n4.setContent(readContentFromFile("tin-tuc-4.html"));
            n4.setImageUrl("images/news-4.png");
            n4.setCreatedAt("2024-11-30");
            n4.setSlug("tin-tuc-4");
            newsRepo.save(n4);
        } else {
            // Update existing single news just in case
            List<News> newsList = newsRepo.findAll();
            for (News n : newsList) {
                if (n.getContent() == null || n.getContent().isEmpty() || n.getContent().contains("<p>Máy bay không người lái")) {
                    String filename = n.getSlug() + ".html";
                    String newContent = readContentFromFile(filename);
                    if (!newContent.isEmpty()) {
                        n.setContent(newContent);
                        newsRepo.save(n);
                    }
                }
            }
            // Add missing news
            if (newsRepo.count() < 4) {
                String[] files = {"tin-tuc-2.html", "tin-tuc-3.html", "tin-tuc-4.html"};
                String[] titles = {
                    "Các ứng dụng quan trọng của Flycam trong đời sống",
                    "Khảo sát địa hình bằng UAV: Giải pháp thay thế hoàn hảo",
                    "Chứng chỉ điều khiển UAV là gì? Vì sao phải cần đến nó?"
                };
                for (int i=0; i<3; i++) {
                    News n = new News();
                    n.setTitle(titles[i]);
                    n.setContent(readContentFromFile(files[i]));
                    n.setImageUrl("images/news-" + (i+2) + ".png");
                    n.setCreatedAt("2024-11-28");
                    n.setSlug(files[i].replace(".html", ""));
                    newsRepo.save(n);
                }
            }
        }

        if (galleryRepo.count() == 0) {
            String[] galleryImages = {
                "gallery-1.png", "gallery-2.png", "gallery-3.png", 
                "gallery-4.png", "gallery-5.png", "gallery-6.png", 
                "gallery-7.png", "gallery-8.png", "gallery-9.png"
            };
            String[] galleryDesc = {
                "Kiểm tra hệ thống điện năng lượng mặt trời bằng UAV",
                "Đo đạc trắc địa công trình giao thông trên vùng núi bằng Drone",
                "Phun thuốc bảo vệ thực vật bằng máy bay không người lái trong nông nghiệp",
                "Thành lập bản đồ địa hình khu vực đồi núi rừng rậm bằng công nghệ LiDAR",
                "Kiểm tra kết cấu kỹ thuật cầu đường bằng Drone sử dụng camera nhiệt",
                "Quay phim và chụp ảnh trên không dự án bất động sản nghỉ dưỡng",
                "Kiểm tra bề mặt cánh quạt tuabin gió điện gió bằng máy bay không người lái",
                "Bay quét 3D khu công nghiệp phục vụ quy hoạch và quản lý dự án",
                "Giao hàng khẩn cấp bằng Drone đến vùng sâu vùng xa"
            };
            for (int i = 0; i < galleryImages.length; i++) {
                Gallery g = new Gallery();
                g.setImageUrl("images/" + galleryImages[i]);
                g.setDescription(galleryDesc[i]);
                galleryRepo.save(g);
            }
        }
    }
}
