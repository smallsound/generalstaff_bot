const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '724656935:AAHtNlNoa8Da6UO7sQzh345UT1gcKPcD01Y'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.keyboard([
  [{':one: go page 1': {go: 'page1'}}],
  [{':two: go page 2': {go: 'page2'}}],
  [{':three: go page 3': {go: 'page3'}}]
])

bot.command('page1').invoke(function (ctx) {
  return ctx.sendMessage('This is page 1')
})

bot.command('page2').invoke(function (ctx) {
  return ctx.sendMessage('This is page 2')
}).keyboard([
  [{':one: go page 1': {go: 'page1'}}],
  [{':three: go page 3': {go: 'page3'}}]
])

bot.command('page3').invoke(function (ctx) {
  ctx.keyboard([
    [{':one: go page 1': {go: 'page1'}}]
    [{':two: go page 2': {go: 'page2'}}]
  ])
})
