module.exports =
{
    "app_name":"kursovik",
    "LOG": {
        "file": "1",
        "console": "0",
        "logs_path": `/server/logs/test.kursovik.ru`,
        "error_period": "day",
        "info_period": "day",
        "error_max_files": "0",
        "info_max_files": "0"
    },
    "telegramm":    
    {
        "app_bot_secret":"",
        "app_api_hash": "",
        "BOT_TOKEN": "",
        "app_api_id": 0,    
        "chat_id": 0   
    },
    "EMAIL":
    {
        "host":"smtp.yandex.ru",
        "address":"",
        "login":'',        
        "password":'',
        "to":'pups_8989@mail.ru',
        "subject":"Получен сигнал тревоги",
        "from":"Система безопасности <mailsandler@yandex.ru>",
    }
}
