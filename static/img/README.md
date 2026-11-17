# Hình minh họa — quy ước & nguồn

Quy tắc số 4 của bộ docs: **mỗi trang kiến trúc mở bằng 1 sơ đồ**, tái dùng hình từ các slide gốc.

## Nguồn slide

| Slide | Dùng cho |
|---|---|
| ADLC (deck chính) | 01 · 02 tổng quan, tầng 1–2, luồng E2E, kiểm chứng |
| sandbox-kit | Tầng 4, bảo mật nhiều lớp |
| agent_memory (pptx) | Agent Memory (Cognee) |
| TestForge-AI | TestForge |
| Ma trận năng lực Agent trong SDLC | 06 · ma-tran-nang-luc |

## Quy ước đặt tên

```
static/img/<ten-phan>/<ten-slide>-slide-<so>.png
```

Ví dụ:

```
static/img/02-architecture/adlc-slide-kientruc.png
static/img/02-architecture/sandbox-kit-slide-broker.png
static/img/03-user-guides/workloop-dashboard-runs.png
```

## Slot đang chờ hình

- `03-user-guides/` — ✅ **ảnh chụp dashboard đã có** (tại thư mục gốc `static/img/`, nhúng trong
  trang Giao diện dashboard):
  `workloop-dashboard-tong-quan.jpeg` · `workloop-dashboard-dag.jpeg` · `workloop-dashboard-duyet.jpeg`.
  Còn thiếu: ảnh TestForge, Sandbox.
- `02-architecture/` — các trang đã dùng **sơ đồ Mermaid** làm hình chính (không còn chờ xuất
  slide); chỉ xuất hình từ slide khi cần thay thế ảnh hiện có
  (`vaiplatform-kien-truc-tong-the.jpeg`, `adlc-kien-truc-nen-tang.png`, `adlc-vong-doi.png`).
- `06-reference/` — ma trận năng lực (hiện dùng bảng markdown, chưa có hình).

> Lưu ý: chỉ xuất hình **không chứa** thông tin nhạy cảm (token, URL nội bộ thật, tên workflow/agent
> của tenant). Kiểm tra trước khi commit.
