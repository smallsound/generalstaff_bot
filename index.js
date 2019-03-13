const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true});
    

bot.onText (/ height /, (msg) => { 
    getHeight () 
        .then (height => bot.sendMessage (msg.chat.id, height)) 
        .catch (error => bot.sendMessage (msg.chat. id, 'Not found')); 
});    
    
                      
 

});
