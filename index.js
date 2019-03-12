const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})


bot.keyboard('footer', [{':arrow_backward:': {go: 'start'}}])

bot.command('start', function (ctx) {
  ctx.sendMessage('Hello there')
}).keyboard([
  [{'Page 1': {go: 'page1'}}],
  [{'Page 2': {go: 'page2'}}]
])

bot.command('page1', function () {
  ctx.sendMessage('This is page 1')
})
.keyboard([
  [{'Page 2': {go: 'page2'}}],
  'footer'
])

bot.command('page2', function () {
  ctx.sendMessage('This is page 1')
})
.keyboard([
  [{'Page 1': {go: 'page1'}}],
  'footer'
])
