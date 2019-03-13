const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true});
    
bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(chatId, 'Выберите какая валюта вас интересует', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '€ - EUR',
            callback_data: 'EUR'
          }, {
            text: '$ - USD',
            callback_data: 'USD'
          }, {
            text: '₽ - RUR',
            callback_data: 'RUR'
          }, {
            text: '₿ - BTC',
            callback_data: 'BTC'
          }
        ]
      ]
    }
  });
    



});
