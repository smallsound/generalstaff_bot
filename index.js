const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})
      
@bot.message_handler(commands=['start'])
def send_welcome(message):
	bot.send_message(
		message.chat.id,
		'''Добро пожаловать. ✌
		''',
		reply_markup=keyboard())
