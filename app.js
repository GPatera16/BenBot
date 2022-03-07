
const {Telegraf} = require('telegraf');

const bot = new Telegraf('5164325716:AAGi22CABMitcO3HaG7HI_5wCZIyQ8_nY-g');

let contatore = 0;
let giovanni = 0;
let pasqualeprattico="Giovanni";

bot.command('negozio',ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Benvenuto al negozio di Giovanni Rana, Cosa le posso offrire?',
    {
        reply_markup:{
            inline_keyboard:[
                [
                    {text:'Ravioli', callback_data:'ravioli'},
                    {text:'Tortellini', callback_data:'tortellini'}
                ]
            ]
        }
    })
})

bot.command('contatore',ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Hai ottenuto un mio prodotto '+contatore+' volte')
})

bot.command('giovcounter',ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Siete basati perché avete detto "Giovanni" '+contatore+' volte')
})

bot.hears(pasqualeprattico.toLowerCase(),ctx =>{
    giovanni=giovanni+1;
})

bot.action('ravioli', ctx =>{
    contatore=contatore+1;
    bot.telegram.sendMessage(ctx.chat.id,'Ecco a lei')
    bot.telegram.sendPhoto(ctx.chat.id,{
        source:"res/ravioli.png"
    })
})
bot.action('tortellini', ctx =>{
    contatore=contatore+1;
    bot.telegram.sendMessage(ctx.chat.id,'Ecco a lei')
    bot.telegram.sendPhoto(ctx.chat.id,{
        source:"res/tortellini.jpg"
    })
})

bot.action('two',ctx=>{
    ctx.reply("ciao")
})


bot.launch();