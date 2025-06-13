document.addEventListener('DOMContentLoaded', () => {
    const homeScreen = document.getElementById('homeScreen');
    const breakfastScreen = document.getElementById('breakfastScreen');
    const mainCourseScreen = document.getElementById('mainCourseScreen');
    const stapleFoodScreen = document.getElementById('stapleFoodScreen');

    const menuItems = document.querySelectorAll('.menu-item');
    const backArrows = document.querySelectorAll('.back-arrow');

    // 初始显示首页
    homeScreen.classList.add('active');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetScreenId = item.dataset.target + 'Screen';
            const targetScreen = document.getElementById(targetScreenId);

            if (targetScreen) {
                homeScreen.classList.remove('active');
                targetScreen.classList.add('active');
            }
        });
    });

    backArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const targetScreenId = arrow.dataset.target;
            
            // 隐藏当前激活的屏幕
            document.querySelector('.content-screen.active').classList.remove('active');

            // 显示目标屏幕（这里是homeScreen）
            if (targetScreenId === 'home') {
                homeScreen.classList.add('active');
            }
        });
    });
});