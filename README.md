# React Dynamic Button

Soal interview frontend PT Data Integrasi Inovasi Tangerang, membuat komponen dasar **Button** dengan catatan :

1. Dinamis background dengan setidaknya 3 warna.
2. Dapat memiliki ikon atau tidak.
3. Posisi ikon dapat di sebelah kanan atau kiri label.
4. Ukuran, background, dan jenis ikon dapat diatur sebagai parameter saat memanggil komponen tersebut.
5. Button harus memiliki setidaknya 3 ukuran.
6. Button dapat memiliki tooltip atau tidak.
7. Posisi tooltip dapat diatur di atas, bawah, kanan, dan kiri.
8. Menggunakan TypeScript.

## Tech Stack / Library

- **React** – UI library
- **TailwindCSS** – Utility-first CSS framework
- **Class Variance Authority (cva)** – Variant-based styling
- **Lucide React** – Icon library
- **ShadcnUI** – Komponen untuk Checkbox, Input dan Select

## Reference

| Prop              | Type                                                                                 | Default    |
| ----------------- | ------------------------------------------------------------------------------------ | ---------- |
| `variant`         | `'primary' \| 'secondary' \| 'safe' \| 'warning' \| 'danger' \| 'outline'`           | `'primary'`|
| `size`            | `'sm' \| 'base' \| 'lg'`                                                             | `'base'`   |
| `icon`            | `LucideIcon`                                                                         | -          |
| `iconPosition`    | `'left' \| 'right'`                                                                  | `'right'`  |
| `tooltip`         | `string`                                                                             | -          |
| `tooltipPosition` | `'top' \| 'bottom' \| 'left' \| 'right'`                                             | `'top'`    |


## Setup Instructions

1. **Clone this repository:**

   ```bash
   git clone https://github.com/zuraLagiNgoding/react-dynamic-button
   cd react-dynamic-button
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Access the app at:**

   ```
   http://localhost:5173
   ```