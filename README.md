# MỘT SỐ CÂU LỆNH
*HTML
- Câu lệnh thêm title
    **layout-title**

*SCSS
-   font-size : Thêm font-size
-   mixin-text-2color : gradian 2 màu
-   mixin-background-img : background-img
-   

* PlOP
-   Thêm page : plop newPage 
-   Thêm Kit :  plop newKit
-   Thêm font : plop addFont

## LƯU Ý :
    - Những số liệu liên quan tới rem vui lòng điền thêm độ dài = px để tránh tình trạng ko hiển thị ở 1 số trình duyệt
    - Nếu là traning thì chỉ nên cần đặt tên theo frame là được

    - max-devices : set khung hình rem ở html
    - between-devices : (kích thước width,height,top,bottom,padding,margin) thường dùng để tự do nhằm căn chỉnh sao cho hợp lí
    - min-devices : (font-size,dùng để set hình ảnh,color) min được chỉ dùng ở các devices hay dùng như 320-769-1025

## CÁC BƯỚC TIẾN HÀNH

**CHUẨN BỊ**
    -   Thiết lập môi trường khi nhận dự án để đẩy lên git
    -   Xem kết cấu trang là chia theo frame hay ko để sử dụng thư viện scroll
    -   Thêm Font Chữ
        +   Mở file PSD > Type > Resolve Missing Font
        +   Sử dụng plop để add thêm font chữ
        +   https://www.whatfontis.com/all-fonts.html để dowloand font
        +   Vào https://www.font-converter.net/en để lấy đủ font chữ 
    -   Xác nhận phần title
    -   Xác nhận các phần component có trong 1 trang ( bản pc + mobi)
    -   Dựng sườn tại file LAYOUT.md và sử dụng tính năng lưu để so sánh song song
    -   JS
        + Xác định các thư viện cần dùng
        + Trộn các file đó vào thành 1 và đặt tên là lib.js
        + https://www.filesmerge.com/merge-javascript-files

**THỰC HÀNH**
    -   Dựng sườn component chính
    -   Tiến hành làm component header / footer / nav-right / popup
    -   Kiểm tra những component còn lại có thể phải là bài viết không để sử dụng class "text"
    -   Tiến hành làm những phần component còn lại
    -   Lắp ráp vào các file kit tương ứng trong content
    -   Căn chỉnh modal 
    -   Thêm hiệu ứng

**BÀN GIAO**
    -   Hỏi những phần không co trong thiết kế để tránh lỗi
    -   Chuyển css qua bên backend để chỉnh sửa thuận tiện hơn
    -   Pull mỗi khi làm


**HIỆU ỨNG**
	-	Hiệu ứng animation when scroll