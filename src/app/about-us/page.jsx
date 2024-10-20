export default function AboutUs() {
  return (
    <div className="container py-10">
      <h1 className="text-center text-xl lg:text-2xl font-bold mb-10 uppercase">
        Sứ mệnh của chúng tôi
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        <div className="lg:flex lg:flex-col lg:justify-center">
          <h1 className="text-center font-semibold text-lg lg:text-xl mb-5">
            Trang phục thể thao có mục đích
          </h1>
          <p className="text-justify">
            Được thành lập vào năm 2024, sứ mệnh của Nisara là cung cấp cho các
            vận động viên trang phục và phụ kiện thể thao cao cấp thể hiện chất
            lượng của họ và cho phép họ thi đấu ở đẳng cấp cao. Người sáng lập
            có những ý tưởng xây dựng thương hiệu phụ kiện thể thao & quần áo
            năng động cao cấp đầu tiên không thoát khỏi tâm trí anh nên anh đã
            có niềm tin và thành lập Nisara. Những gì bắt đầu như một thương
            hiệu sport của anh ấy đã phát triển vượt xa những gì anh ấy có thể
            tưởng tượng. Nó còn hơn cả việc lấp đầy khoảng trống trên thị
            trường. Đó là theo đuổi mục đích sống và động lực cho bạn tập luyện
            mỗi ngày để có một sức khỏe tốt, một thân hình đẹp.
          </p>
        </div>
        <div>
          <img
            src="/assets/nisara-logo.png"
            alt="nisara-logo"
            className="block mx-auto"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img
            src="/assets/about-us-1.png"
            alt="nisara-logo"
            className="block mx-auto"
          />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center">
          <h1 className="text-center font-semibold text-lg lg:text-xl mb-5">
            Sứ mệnh & Mục đích
          </h1>
          <p className="text-justify">
            Trước khi tung ra sản phẩm mới, chúng tôi đảm bảo sản phẩm đó có
            chất lượng hàng đầu bằng cách trải qua các bài tập luyện nghiêm
            ngặt, trang phục hàng ngày và chu trình giặt bằng máy giặt.Tất cả
            các sản phẩm của chúng tôi đều được làm bằng vải và vật liệu chất
            lượng cao nhất được chế tạo để tồn tại lâu dài. Thay vì chạy theo xu
            hướng, chúng tôi thiết kế những thiết bị được cộng đồng mong muốn và
            độc đáo trên thị trường. Ưu tiên hàng đầu của chúng tôi là không
            ngừng phấn đấu để tạo ra các loại vải công nghệ mới và các tính năng
            cao cấp như khả năng chống nước, thông gió có chủ đích, các chi tiết
            phản quang, đặc tính thấm mồ hôi và chất liệu co giãn 4 chiều. Cho dù
            bạn là vận động viên bóng đám cử tạ, vận động viên chạy đường dài
            hay bất kỳ vận động viên nào, thiết bị của chúng tôi sẽ cho phép bạn
            đạt hiệu suất cao nhất ngày này qua ngày khác.
          </p>
        </div>
      </div>
    </div>
  );
}
