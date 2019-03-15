const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})
      
bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
    "keyboard": [["sample", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
});
    
});


bot.on('message', (msg) => {
var sample = "sample";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}    
var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}
});
