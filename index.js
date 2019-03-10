const TelegramBot = require('node-telegram-bot-api')


const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello, bot says: "Привет, ${msg.from.first_name}"`)
})
