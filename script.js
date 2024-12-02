// Показываем скрытые разделы
function toggleTikTokLinks() {
    const tiktokLinks = document.getElementById('tiktokLinks');
    tiktokLinks.classList.toggle('hidden');
}

function toggleDonateOptions() {
    const donateOptions = document.getElementById('donateOptions');
    donateOptions.classList.toggle('hidden');
}

// Скроем экран приветствия через 3 секунды
setTimeout(() => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.style.display = 'none';
}, 3000);
