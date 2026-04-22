// Инициализация Telegram WebApp
let tg = window.Telegram?.WebApp;

if (tg) {
    tg.expand(); // раскрывает на весь экран
}

// Безопасно получаем пользователя
let user = tg?.initDataUnsafe?.user || {
    id: "Неизвестно",
    first_name: "Гость",
    username: ""
};

// Установка активной кнопки
function setActive(el) {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    el.classList.add("active");
}

// Главная страница
function showHome(el) {
    setActive(el);

    document.getElementById("content").innerHTML = `
        <h2>🏠 Главная</h2>

        <div class="card">
            <p>Добро пожаловать, ${user.first_name}</p>
        </div>

        <div class="card">
            <p>Это приложение Verzilla</p>
        </div>
    `;
}

// Профиль
function showProfile(el) {
    setActive(el);

    document.getElementById("content").innerHTML = `
        <h2>👤 Профиль</h2>

        <div class="card">
            <p><b>ID:</b> ${user.id}</p>
            <p><b>Имя:</b> ${user.first_name}</p>
            <p><b>Username:</b> ${user.username ? "@" + user.username : "нет"}</p>
        </div>

        <div class="card">
            <p class="balance">Баланс: 0 ⭐</p>
        </div>
    `;
}

// Загружаем главную при старте
window.onload = () => {
    const firstBtn = document.querySelector(".nav-item");
    showHome(firstBtn);
};