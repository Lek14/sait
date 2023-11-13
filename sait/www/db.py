import sqlite3

# Подключение к базе данных (если базы данных не существует, она будет создана)
conn = sqlite3.connect('users.db')

# Создание курсора
c = conn.cursor()

# Создание таблицы
c.execute('''CREATE TABLE users
             (id INTEGER PRIMARY KEY,
             username TEXT NOT NULL,
             password TEXT NOT NULL,
             email TEXT NOT NULL)''')

# Сохранение изменений
conn.commit()

# Закрытие соединения
conn.close()