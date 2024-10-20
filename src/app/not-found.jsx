import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Lỗi | NISARA | Buôn bán sỉ lẻ đồ tập, đồ thể thao",
  description: "Lỗi | NISARA | Buôn bán sỉ lẻ đồ tập, đồ thể thao",
};

export default function NotFound() {
  return (
    <div className="container py-20">
      <h1 className="text-center text-xl lg:text-2xl font-medium mb-10">
        Trang bạn đang truy cập không tồn tại !
      </h1>
      <div className="flex items-center justify-center gap-2">
        <p className="text-center">Vui lòng kiểm tra lại đường dẫn hoặc</p>
        <Link
          href="/"
          className="flex items-center gap-4 bg-black rounded py-2 px-4 text-white"
        >
          <span>Về trang chủ</span> <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
