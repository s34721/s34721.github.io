// script.js - ลูกเล่นเว็บไซต์ของ สุรพงษ์ รวยทรัพย์

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. สร้างปุ่ม Dark Mode แบบอัตโนมัติและใส่ไว้ใน Header
    const header = document.querySelector('header');
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerText = '🌙 เปลี่ยนโหมด';
    darkModeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 8px 15px;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    `;
    
    // ให้ปุ่มเปลี่ยนสีเวลาเอาเมาส์ไปชี้ (Hover)
    darkModeBtn.addEventListener('mouseenter', () => {
        darkModeBtn.style.backgroundColor = 'white';
        darkModeBtn.style.color = '#2c3e50';
    });
    darkModeBtn.addEventListener('mouseleave', () => {
        darkModeBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        darkModeBtn.style.color = white;
    });

    if (header) {
        header.style.position = 'relative'; // ตั้งค่าเพื่อให้ปุ่มอิงตำแหน่งได้ถูกต้อง
        header.appendChild(darkModeBtn);
    }

    // 2. ฟังก์ชันสลับโหมดมืด (Dark Mode Toggle)
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // เปลี่ยนไอคอนและข้อความบนปุ่มตามสถานะ
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.innerText = '☀️ โหมดสว่าง';
        } else {
            darkModeBtn.innerText = '🌙 โหมดมืด';
        }
    });

    // 3. เอฟเฟกต์ทักทายผู้ใช้งานใน Console (เปิดดูได้ในหน้าต่าง Inspect ของบราวเซอร์)
    console.log("ยินดีต้อนรับสู่ Portfolio ของ สุรพงษ์ รวยทรัพย์! โค้ด JavaScript ทำงานปกติครับ");
});
