import telebot
from extensions import *

bot = telebot.TeleBot(KeyToken.get_token('token'))


# Инструкции боту по команде start
@bot.message_handler(commands=['start'])
def start_message(message: telebot.types.Message):
    text = 'Здравтсуйте! Вас приветствует валютный помощник.\n' \
           'Я могу быстро переводить валюты, одну в другую.\n' \
           "\n" \
           'Введите команду /help, для подробного описания.\n' \
           'Введите команду /values, чтобы увидеть весь список валют.\n'
    bot.reply_to(message, text)


# Инструкции боту по команде help
@bot.message_handler(commands=['help'])
def help_message(message: telebot.types.Message):
    text = 'Для ввода значений, необходимо воспользоваться списком доступных валют. \n' \
           'Правильные названия валют достаточно длинные, но \n' \
           'все валюты имеют международное буквенное обозначение.\n' \
           "\n" \
           'Найдите в списке необходимую валюту и используйте ее буквенное обозначение.\n' \
           "\n" \
           'Введите команду в формате:\n<количество переводимой валюты>' \
           ' <имя валюты> <в какую валюту перевести>\n' \
           "\n" \
           'Пример:\n' \
           'Запрос: 10 EUR RUB или 10 eur rub\n' \
           'Ответ: 10 EUR = N RUB\n' \
           "\n" \
           'Всего доступно 162 валюты.\n' \
           "\n" \
           'Увидеть список всех доступных валют: /values \n' \
           'Вы также можете вернуться в стартовое меню: /start'
    bot.reply_to(message, text)


# Инструкции боту по команде values
@bot.message_handler(commands=['values'])
def values_message(message: telebot.types.Message):
    text = 'Доступные валюты, согласно ОКВ — Общероссийскому классификатору валют:\n'
    for symbol, name in CurrencyConverter.get_dict_currency().items():
        text += f"{symbol} - {name}\n"
    text += "\nВы также можете вернуться в стартовое меню /start \n" \
            "или заново прочитать описание /help"
    bot.reply_to(message, text)


# Инструкции боту при вводе текста пользователем и основной алгоритм работы с отлавливанием исключений
@bot.message_handler(content_types=['text', ])
def convert(message: telebot.types.Message):
    try:
        amount, base, quote = APIException.parse_input(message.text.split(' '))  # Ввод пользователем значений
        result = CurrencyConverter.get_price(amount, base, quote)  # Обработанные, после исключений, значения
        text = f"{amount} {base} = {result} {quote}"  # Вывод результата
        bot.send_message(message.chat.id, text)
    except APIException as e:
        bot.reply_to(message, str(e))


# none_stop на случай непредвиденных исключений
bot.polling(none_stop=True)
