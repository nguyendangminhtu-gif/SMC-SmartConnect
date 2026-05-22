const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const templatePath = path.join(dir, 'tin-tuc.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

const newsData = [
    {
        file: 'tin-tuc-1.html',
        title: 'Những ví dụ tuyệt vời nhất về máy bay không người lái đang được sử dụng ngày nay: Từ vũ khí đáng sợ đến công cụ hữu ích',
        date: '27 Tháng 11, 2024',
        image: 'images/news-1.png?v=2',
        excerpt: 'Máy bay không người lái, máy bay được điều khiển từ xa hoặc tự động, là loại máy bay không có con người trên máy bay, có thể được sử dụng theo nhiều cách. Từ một chiếc máy bay không người lái giải trí vào cuối tuần đến một hệ thống chuyên dụng trong quân sự trị giá hàng triệu đô la, tất cả đang trở thành một phần quan trọng trong nhiều lĩnh vực.',
        content: `
            <p>Trong kỷ nguyên công nghệ 4.0, máy bay không người lái (UAV) không còn là một khái niệm xa lạ. Ban đầu được phát triển chủ yếu cho mục đích quân sự, ngày nay chúng đã trở thành một phần không thể thiếu trong nhiều khía cạnh của đời sống dân sự và thương mại.</p>
            <h2>Cách mạng hóa nông nghiệp</h2>
            <p>Một trong những ứng dụng dân sự lớn nhất của UAV là trong lĩnh vực nông nghiệp. Máy bay không người lái được trang bị cảm biến đa phổ có khả năng quét hàng trăm hecta cây trồng mỗi ngày để phát hiện sâu bệnh, tình trạng thiếu nước hoặc thiếu dinh dưỡng. Không chỉ khảo sát, những dòng drone cỡ lớn như DJI Agras còn có khả năng phun thuốc trừ sâu và gieo hạt tự động với độ chính xác tuyệt đối, giảm thiểu lãng phí và bảo vệ sức khỏe người nông dân.</p>
            <blockquote>UAV đang biến nông nghiệp truyền thống thành nông nghiệp chính xác, tối ưu hóa năng suất và giảm thiểu tác động đến môi trường.</blockquote>
            <h2>An ninh và cứu hộ</h2>
            <p>Trong lĩnh vực an ninh và cứu hộ, UAV đóng vai trò như những "con mắt trên bầu trời". Chúng được sử dụng để tìm kiếm người mất tích trong rừng sâu, giám sát hiện trường hỏa hoạn để tìm điểm cháy, hoặc vận chuyển phao cứu sinh cho người đang gặp nạn trên biển. Các camera ảnh nhiệt giúp UAV hoạt động hiệu quả ngay cả trong điều kiện đêm tối hoặc khói bụi mù mịt.</p>
            <p>Bên cạnh đó, việc sử dụng UAV trong giao hàng (logistics) cũng đang được các tập đoàn lớn như Amazon hay Google Wing thử nghiệm và triển khai, hứa hẹn sẽ thay đổi hoàn toàn thói quen mua sắm của con người trong tương lai gần.</p>
        `
    },
    {
        file: 'tin-tuc-2.html',
        title: 'Nghiên cứu các cuộc tấn công của máy bay không người lái: Tương lai của công nghệ an ninh trên không',
        date: '25 Tháng 11, 2024',
        image: 'images/news-2.png?v=2',
        excerpt: 'Các hệ thống phòng thủ trên không ngày nay đang dần phụ thuộc nhiều hơn vào mạng lưới các thiết bị không người lái. Nghiên cứu mới nhất cho thấy vận tốc và độ chính xác của các phi đội UAV thế hệ mới có thể vượt xa những dự đoán ban đầu, đặt ra thách thức và cơ hội lớn cho các nhà hoạch định chiến lược.',
        content: `
            <p>Sự trỗi dậy của máy bay không người lái trong các chiến lược quân sự hiện đại đang làm thay đổi hoàn toàn cục diện an ninh toàn cầu. Các cuộc xung đột gần đây đã chứng minh rằng các hệ thống vũ khí truyền thống đắt tiền có thể bị vô hiệu hóa bởi các phi đội UAV (Swarm Drones) nhỏ gọn, chi phí thấp nhưng có tính phối hợp cao.</p>
            <h2>Thách thức phòng không mới</h2>
            <p>Một nghiên cứu do các chuyên gia chiến lược công bố gần đây chỉ ra rằng, việc đánh chặn một đàn UAV tự sát (Kamikaze drones) đang bay ở tầm thấp là một thách thức cực lớn đối với radar và hệ thống phòng không hiện tại. Chúng có tiết diện radar nhỏ, bay sát mặt đất để né tránh hệ thống cảnh báo và có thể điều hướng bằng AI khi bị nhiễu sóng GPS.</p>
            <blockquote>Trong tương lai, vũ khí chống lại UAV có thể chính là những hệ thống UAV đánh chặn tự động khác.</blockquote>
            <h2>Tương lai của công nghệ an ninh</h2>
            <p>Để đối phó với mối đe dọa này, các nhà thầu quốc phòng đang tập trung phát triển các hệ thống vũ khí laser (DEW - Directed Energy Weapons) và thiết bị tác chiến điện tử có khả năng vô hiệu hóa hàng loạt UAV trong một khu vực rộng lớn. Đồng thời, công nghệ AI đang được tích hợp vào hệ thống phòng thủ để có thể tự động phân tích đường bay, phân loại mục tiêu và ra quyết định đánh chặn chỉ trong tích tắc.</p>
            <p>Công nghệ an ninh trên không đang bước vào một kỷ nguyên mới, nơi trí tuệ nhân tạo và tốc độ phản ứng sẽ định hình sự sống còn trên chiến trường.</p>
        `
    },
    {
        file: 'tin-tuc-3.html',
        title: 'Ứng dụng Trí tuệ Nhân tạo (AI) trong kiểm tra kỹ thuật và giám sát năng lượng tái tạo',
        date: '20 Tháng 11, 2024',
        image: 'images/news-3.png?v=2',
        excerpt: 'Với việc tích hợp các thuật toán học máy (Machine Learning) tiên tiến, các máy bay không người lái hiện nay có thể tự động phát hiện các vi mạch hư hỏng trên bề mặt tấm pin mặt trời hay phân tích các vết nứt nhỏ li ti trên tuabin gió ở độ cao hàng trăm mét với sai số chưa tới 1 mm.',
        content: `
            <p>Ngành năng lượng tái tạo, bao gồm điện gió và điện mặt trời, đang chứng kiến tốc độ phát triển chóng mặt. Tuy nhiên, việc bảo trì và kiểm tra các công trình năng lượng quy mô lớn này thường tốn kém, mất thời gian và tiềm ẩn nhiều nguy hiểm. Sự kết hợp giữa UAV và Trí tuệ Nhân tạo (AI) đã mang lại giải pháp hoàn hảo cho bài toán này.</p>
            <h2>Tự động hóa phát hiện lỗi</h2>
            <p>UAV trang bị camera độ phân giải cao và camera ảnh nhiệt có thể bay quanh các tuabin gió hay dọc theo các cánh đồng pin mặt trời để thu thập hình ảnh. Điểm đột phá nằm ở việc dữ liệu này được gửi trực tiếp đến hệ thống phần mềm phân tích bằng AI. Thuật toán học máy (Machine Learning) sẽ tự động nhận diện:</p>
            <ul>
                <li>Các điểm nghẽn nhiệt (hotspots) trên tấm pin mặt trời, nơi năng lượng bị thất thoát.</li>
                <li>Vết nứt chân chim, sứt mẻ cấu trúc vỏ bọc trên cánh quạt tuabin gió khổng lồ.</li>
                <li>Rỉ sét hoặc ăn mòn trên hệ thống bu-lông và giá đỡ kim loại.</li>
            </ul>
            <blockquote>AI có thể xử lý hàng nghìn bức ảnh chỉ trong vài phút, điều mà kỹ sư con người phải mất hàng tuần để thực hiện, với độ chính xác cao hơn nhiều lần.</blockquote>
            <h2>Giám sát thời gian thực và dự đoán hỏng hóc</h2>
            <p>Không chỉ dừng lại ở việc phát hiện lỗi hiện tại, AI còn có khả năng xây dựng "Mô hình kỹ thuật số" (Digital Twin) của cơ sở hạ tầng. Bằng cách phân tích dữ liệu kiểm tra qua nhiều chu kỳ, phần mềm có thể dự đoán thời điểm một linh kiện có nguy cơ hỏng hóc (Predictive Maintenance), cho phép ban quản lý lập kế hoạch bảo trì chủ động, tránh việc ngừng hoạt động đột ngột gây thiệt hại kinh tế.</p>
            <p>UAV tích hợp AI đang thiết lập những chuẩn mực mới, đảm bảo các cơ sở năng lượng tái tạo hoạt động bền bỉ, an toàn và tối đa hóa sản lượng điện năng.</p>
        `
    },
    {
        file: 'tin-tuc-4.html',
        title: 'Phép màu từ bầu trời: Drone chở vật tư y tế cứu hộ khẩn cấp trong vùng lũ',
        date: '15 Tháng 11, 2024',
        image: 'images/news-4.png?v=2',
        excerpt: 'Vượt qua các điều kiện thời tiết khắc nghiệt và địa hình bị chia cắt hoàn toàn, các phi đội drone cứu hộ đã thiết lập một "đường ống tiếp tế hàng không" vận chuyển liên tục thuốc men, máy trợ tim và lương thực tới những nạn nhân mắc kẹt nhanh gấp 10 lần so với các phương tiện truyền thống.',
        content: `
            <p>Biến đổi khí hậu đang khiến các hình thái thời tiết cực đoan như bão lũ, sạt lở đất trở nên khó lường hơn. Khi hệ thống giao thông bị tê liệt, công tác tiếp tế nhu yếu phẩm và vật tư y tế bằng phương pháp truyền thống trở nên vô cùng khó khăn. Lúc này, công nghệ máy bay không người lái (Drone/UAV) đã thực sự trở thành "vị cứu tinh" từ bầu trời.</p>
            <h2>Cầu nối hàng không sinh tử</h2>
            <p>Trong các đợt bão lũ gần đây, chính phủ và các tổ chức cứu trợ đã sử dụng các dòng drone hạng nặng có sức tải từ 20 đến 50 kg để vận chuyển hàng hóa qua những vùng nước ngập sâu hay địa hình sạt lở nguy hiểm. Các nhu yếu phẩm thiết yếu như:</p>
            <ul>
                <li>Thuốc men khẩn cấp, vaccine, máy khử rung tim (AED) cho người bệnh đang nguy kịch.</li>
                <li>Thực phẩm, nước sạch và đồ giữ ấm cho các hộ gia đình bị cô lập.</li>
                <li>Thiết bị liên lạc bộ đàm, pin sạc dự phòng để duy trì thông tin liên lạc.</li>
            </ul>
            <blockquote>So với cano hay trực thăng, drone cứu hộ linh hoạt hơn, tốn ít chi phí vận hành hơn và có thể tiếp cận chính xác tận sân nhà của nạn nhân mắc kẹt.</blockquote>
            <h2>Thả hàng tự động và hoạt động ban đêm</h2>
            <p>Các hệ thống phần mềm quản lý không lưu hiện đại cho phép một người điều khiển (Pilot) thao tác cùng lúc nhiều drone để tạo thành chuỗi cung ứng trên không (Air Corridor). Các drone được lập trình tọa độ GPS chính xác và tự động thả hộp hàng bằng cơ cấu tời (winch) từ độ cao 20-30 mét mà không cần phải hạ cánh ở những bề mặt không an toàn.</p>
            <p>Đặc biệt, nhờ camera hồng ngoại ảnh nhiệt, các đội cứu hộ có thể bay xuyên đêm để tìm kiếm các dấu hiệu sinh tồn của nạn nhân đang chờ cứu giúp. Không chỉ đơn thuần là công nghệ, máy bay không người lái mang theo niềm hy vọng, chứng minh giá trị to lớn của sự tiến bộ kỹ thuật trong việc phụng sự nhân loại.</p>
        `
    }
];

// Extract correctly up to <main class="news-wrapper">
const mainStartIndex = templateContent.indexOf('<main class="news-wrapper">');
const headerContent = templateContent.substring(0, mainStartIndex);

// Extract only the ACTUAL footer
const footerStartIndex = templateContent.indexOf('<footer class="footer">');
const footerContent = templateContent.substring(footerStartIndex);

newsData.forEach(item => {
    const breadcrumbHtml = `
    <main class="news-detail-wrapper">
        <div class="container">
            <div class="breadcrumbs">
                <a href="index.html">Trang chủ</a>
                <i class="fa-solid fa-chevron-right"></i>
                <a href="tin-tuc.html">Tin tức</a>
                <i class="fa-solid fa-chevron-right"></i>
                <a href="${item.file}">${item.title}</a>
            </div>
        </div>
        
        <div class="news-detail-container">
            <div class="news-detail-meta">
                <i class="fa-regular fa-calendar"></i>
                <span>${item.date}</span>
                <span style="margin: 0 10px; color: var(--gold);">|</span>
                <i class="fa-solid fa-tag"></i>
                <span>Công nghệ UAV</span>
            </div>
            
            <h1 class="news-detail-title">${item.title}</h1>
            
            <!-- We will put the image BACK here -->
            <img src="${item.image}" alt="${item.title}" class="news-detail-image">
            
            <div class="news-detail-content">
                <p><strong>${item.excerpt}</strong></p>
                ${item.content}
            </div>
            
            <div style="margin-top: 60px; padding-top: 30px; border-top: 1px solid #e2e8f0; text-align: center;">
                <a href="tin-tuc.html" class="btn btn-outline" style="padding: 12px 30px; border: 2px solid var(--primary-blue); color: var(--primary-blue); font-weight: 600; border-radius: 8px; text-decoration: none; transition: 0.3s;"><i class="fa-solid fa-arrow-left" style="margin-right: 8px;"></i> Quay lại danh sách tin tức</a>
            </div>
        </div>
    </main>
`;

    const fullContent = headerContent + breadcrumbHtml + footerContent;
    fs.writeFileSync(path.join(dir, item.file), fullContent, 'utf8');
    console.log('Fixed ' + item.file);
});
