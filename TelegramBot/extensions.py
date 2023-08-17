import requests
import json
from lxml import etree
from configparser import *


# Создаем класс получения токена и ключа API из файла config.ini
class KeyToken:
    @staticmethod
    def get_token(name_key):
        url_config = 'C:/Users/user/PycharmProjects/С5/config/config.ini'
        config = ConfigParser()  # Создаем объект ConfigParser,
        config.read(url_config)  # считываем файл конфигурации config.ini,
        token = config['Telegram']['token']   # получаем значение токена из секции Telegram
        key_api = config['API']['key']  # получаем значение токена из секции API

        if name_key == 'token':
            return token
        if name_key == 'key_api':
            return key_api


# Создаем класс CurrencyConverter, для получения словаря валют и получения конвертированной цены
# Используем статические методы, чтобы не создавать экземпляры класса
class CurrencyConverter:
    @staticmethod
    def get_dict_currency():  # Метод получения словаря с символами и именами валют с сайта okv
        response = requests.get("https://classifikators.ru/okv")
        html = etree.HTML(response.content)
        table = html.xpath("/html/body/div[1]/div/main/div[4]/table/tbody")[0]

        currencies = {}  # Создаем пустой словарь для хранения валют

        for row in table.xpath(".//tr"):  # Через цикл проходимся по таблице по указанному пути
            cells = row.xpath(".//td")  # td - теги со строчками валют

            symbol = cells[2].text  # Столбик с буквеннным обозначением валюты на html
            name = cells[3].text  # Столбик с наименованием валюты на html

            currencies[symbol] = name  # Записываем в словарь имена и символы валют

        return currencies

    @staticmethod
    def get_price(amount, base, quote):  # Метод получения конвертированной цены
        if base == quote:  # Случай конвертации одинаковой валюты
            return amount

        key_api = KeyToken.get_token('key_api')
        url = f"https://v6.exchangerate-api.com/v6/{key_api}/latest/{base}"
        response = requests.get(url)  # Парсим полученные данные с сайта через ссылку,
        data = json.loads(response.text)  # с введенными данными

        try:
            quote not in data['conversion_rates']  # Проверяем, есть ли валюта в словаре API
        except KeyError:
            raise APIException(f"Неверная валюта: {base}")

        try:
            exchange_rate = data['conversion_rates'][quote]  # Выбираем из словаря валюту,
        except KeyError:  # в которую конвертируем
            raise APIException(f"Неверная валюта: {quote}")
            
        converted_amount = amount * exchange_rate  # и умножаем на amount

        return f'{converted_amount:.6f}'  # Возврат результата с 6 знаками после запятой


class APIException(Exception):  # Класс обработки исключений, родительский Exception
    @staticmethod
    def parse_input(input_string):  # Метод обработки вводимых данных пользователей
        inputs = input_string
        if len(inputs) != 3:
            raise APIException("Неверный формат введенных данных. Пожалуйста введите форму:\n" \
                               "<количество переводимой валюты> <имя валюты> <в какую валюту перевести>")

        try:  # Проверка, что первое введенное СТРОКОВОЕ значение можно преобразовать
            float(inputs[0])  # в вещественное число и что это число
        except ValueError:
            raise APIException("Первое значение должно быть положительным числом.")

        amount = float(inputs[0])  # Преобразование в число первого значения,
        base = inputs[1].upper()   # второе и третье - в верхний регистр
        quote = inputs[2].upper()

        # Обработка исключений, в случае неверно введенных данных
        symbol_to_currency = CurrencyConverter.get_dict_currency()
        if amount <= 0 and base not in symbol_to_currency.keys() \
                and quote not in symbol_to_currency.keys():
            raise APIException(f"Все введенные значения {inputs[0]} {inputs[1]} {inputs[2]}" \
                               "- неверные.\n Введите корректные значения.")

        elif amount <= 0 and base not in symbol_to_currency.keys():
            raise APIException(f"Значения {inputs[0]} {inputs[1]}" \
                               " - неверные.\n Введите корректные значения.")

        elif amount <= 0 and quote not in symbol_to_currency.keys():
            raise APIException(f"Значения {inputs[0]} {inputs[2]}" \
                               " - неверные.\n Введите корректные значения.")

        elif amount <= 0:
            raise APIException(f"Первое значение должно быть больше 0")

        elif base not in symbol_to_currency.keys():
            raise APIException(f"Неверная валюта: {inputs[1]}")

        elif quote not in symbol_to_currency.keys():
            raise APIException(f"Неверная валюта: {inputs[2]}")

        return amount, base, quote  # Возвращаем обработанные значения базовых переменных



