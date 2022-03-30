
const {Telegraf} = require('telegraf');

const bot = new Telegraf('5106100287:AAFMWVg5r8532NKLGc1XDFpbtU0ubj_hWEs');


bot.command('ben',ctx =>{
    let response = Math.floor(Math.random() * 4)+1;
    switch(response) {
        case 1:
          bot.telegram.sendMessage(ctx.chat.id, 'Yes')
          break;
        case 2:
          bot.telegram.sendMessage(ctx.chat.id, 'No')
          break;
        case 3:
            bot.telegram.sendMessage(ctx.chat.id, 'ugh')
            break;
        case 4:
            bot.telegram.sendMessage(ctx.chat.id, 'hoho')
            break;
      }
})

bot.launch();