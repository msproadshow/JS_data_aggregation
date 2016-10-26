# JS_data_aggregation
MSP Roadshow


Створюватимемо пошуковик по універам, факультетам і кафедрам по БД ВК.

`npm i sync-request`

Приклад використання: `request('GET', 'http://goo.gl').getBody().toString()`

0. Синтаксис запитів можна [глянути тут](https://vk.com/dev/api_requests?f=1.%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81%20%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%B0).


1. Дізнатись номер країни. [Опис методу](https://vk.com/dev/database.getCountries).
2. Дізнатись номер міста. [Опис методу](https://vk.com/dev/database.getCities).

3. Дізнатись номери усіх універів міста. [Опис методу](https://vk.com/dev/database.getUniversities).
4. Дістати усі що мають у собі `query`. Наприклад, `query = 'инженер'`.<br>
   Додайте параметр `city_id` до кожного такого універу.<br>
   Запишіть у файл `Universities.json`. Напр, через [fs.writeFile()](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback).

5. Дізнатись усі факультети усіх універів міста [Опис методу](https://vk.com/dev/database.getFaculties)
6. Дістати усі що мають у собі `query`.<br>
   Додайте параметри `city_id` та `university_id` до кожного такого факультету.<br>
   Запишіть у файл Faculties.json.


7. Дізнатись усі кафедри усіх факультетів усіх універів міста. [Опис методу](https://vk.com/dev/database.getChairs).
8. Дістати усі що мають у собі `query`.<br>
   Додайте параметри `city_id`, `university_id`, `faculty_id` до кожної такої кафедри.<br>
   Запишіть у файл Chairs.json.
<br>
<br>
Якщо ви виконали усі попередні пункти і у вас ще є час, ось додаткові:
<br>
<br>
9. Модифікуйте функцію запису так, щоб на початку назви файлу виводилася дата і час його запису.
10. Додайте можливість задавання параметрів запуску вашої програми через консоль. [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
11. Додайте можливість пошуку з виключенням. Наприклад, знайти усі універиститети, що не містять у назві `(рус.`. <br>
    Не забудьте модифікувати аргрументи для запуску через консоль.
12. Зробіть статистику по містам :)
