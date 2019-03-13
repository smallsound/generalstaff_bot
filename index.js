const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true});
    

bot.onText(/\/start/, (msg) => {
    


var menuButtons = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard:
        [
            [{text: 'Сегодня', callback_data: 'today'}]
        ]
    })
};


});
