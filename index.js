const TelegramBot = require('node-telegram-bot-api')
import time
from telebot import types

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello, bot says: "Привет, ${msg.from.first_name}"`)
})


@bot.message_handler(commands=["start"]
def keyboard(message):
    key = types.ReplyKeyboardMarkup()
    key.row("1", "2", "3")
    bot.send_message(message.chat.id, "Выберите цифру", reply_markup=key)




bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello, bot says: "Привет, ${msg.from.first_name}"`)
})



if __name__ == "__main__":
    bot.polling(none_stop=True)
