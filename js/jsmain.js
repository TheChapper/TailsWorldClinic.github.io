
//кнопка вверх
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scrollToTopButton').style.display = 'block';
    } else {
        document.getElementById('scrollToTopButton').style.display = 'none';
    }
}

document.getElementById('scrollToTopButton').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//--------------------------------------------

//рандомная цитата для сайта
writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Любовь к животным — это не просто слова, это образ жизни.";
    quotes[1] = "Здоровье вашего питомца — наша главная забота.";
    quotes[2] = "Каждый питомец заслуживает самого лучшего ухода.";
    quotes[3] = "Счастливый питомец — счастливый хозяин.";
    quotes[4] = "Здоровье вашего питомца — наша миссия.";
    quotes[5] = "Любовь и забота — залог здоровья вашего питомца.";
    quotes[6] = "Ваш питомец — часть вашей семьи, и мы заботимся о нем как о своем.";
    quotes[7] = "Здоровый питомец — счастливый дом.";
    quotes[8] = "Каждый визит к нам — шаг к здоровью вашего питомца.";
    quotes[9] = "Мы помогаем вашим питомцам жить долго и счастливо.";
    var rand = Math.floor(Math.random() * quotes.length);
    document.write(quotes[rand]);
}

//---------------------------------------

//дата
        function showDate() {
            var d = new Date();
            var curr_date = d.getDate();
            var curr_month = d.getMonth() + 1; //months are zero based
            var curr_year = d.getFullYear();
            document.write(curr_date + "-" + curr_month + "-" + curr_year);
        }

//------------------------------------

//отправка данных
document.getElementById('contact').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Здесь можно добавить код для отправки данных на сервер
    alert(`Спасибо, ${name}! Ваша заявка оформлена, скоро Вам перезвонит сотрудник клиники.`);
    this.reset();
});
