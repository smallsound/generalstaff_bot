const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, `Добро пожаловать ${msg.from.first_name}✌`, {
"reply_markup": {
    "keyboard": [["1 text"],   ["2 text"], ["3 text"]]
    }
});
    
var robot = "1 text";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "ответ 1");

});
