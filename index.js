const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Команда /start
bot.command('start', (ctx) => {
  ctx.reply(`🤖 Привет! Я TON Payment Bot.\n\n`
    + `Команды:\n`
    + `/start - это сообщение\n`
    + `/balance - проверить баланс\n`
    + `/donate - поддержать разработчика\n`
    + `/github - исходный код\n`
    + `/help - помощь`);
});

// Команда /github
bot.command('github', (ctx) => {
  ctx.reply('📦 Исходный код:\nhttps://github.com/Grek-roman/Ton-payment-bot');
});

// Команда /donate
bot.command('donate', (ctx) => {
  ctx.reply('💎 TON адрес для донатов:\n`UQDRNLqywgLzeGcwSZuULIMYld3dW62Oc6vlF6JTMALcoRN`', {
    parse_mode: 'Markdown'
  });
});

// Команда /balance
bot.command('balance', async (ctx) => {
  ctx.reply('⚙️ Баланс в разработке...\nСкоро будет интеграция с TON API!');
});

// Команда /help
bot.command('help', (ctx) => {
  ctx.reply('🆘 Пиши /start для списка команд\nПроблемы? Пиши @твой_юзернейм');
});

// На любое сообщение
bot.on('text', (ctx) => {
  ctx.reply('Используй команды! /start - список');
});

// Запуск бота
bot.launch()
  .then(() => console.log('🤖 Бот запущен в Termux!'))
  .catch(err => console.error('Ошибка:', err));

// Правильное завершение
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
