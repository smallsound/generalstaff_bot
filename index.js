const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})
      
var l1 = "left";
var r1 = "right";

var g1 = "Good";
var b1 = "Bad";

  bot.onText(/\/step2/, (msg) => {
        bot.sendMessage(msg.chat.id, "Who is playing?\n And you must write <<И>>", {});
        bot.on('text', (msg) => {
        if (msg.text.toLowerCase().includes("и")) {
          bot.sendMessage(msg.chat.id, "This is left or right?", {
            "reply_markup": {
              "keyboard": [[l1 , r1]]
            }
          });
          bot.on('text', (msg) => {
            if (msg.text === l1) {
              bot.sendMessage(msg.chat.id, "Good or bad?", {
                "reply_markup": {
                  "keyboard": [[g1 , b1]]
                }
              });
              bot.on('text', (msg) => {
                if (msg.text === g1) {
                  bot.sendMessage(msg.chat.id, "So, you can go \n /step3", {});
                } else if (msg.text === b1) {
                  bot.sendMessage(msg.chat.id, "So, you can go \n /step3", {});
                }
              });
            } else if (msg.text === r1) {
              bot.sendMessage(msg.chat.id, "Good or bad?", {
                "reply_markup": {
                  "keyboard": [[g1 , b1]]
                }
              });
              bot.on('text', (msg) => {
                if (msg.text === g1) {
                  bot.sendMessage(msg.chat.id, "So, you can go \n /step3", {});
                } else if (msg.text === b1) {
                  bot.sendMessage(msg.chat.id, "So, you can go \n /step3", {});
                }
              });
            }
          });
          } else {}
      });
    });
