const { Telegraf } = require('telegraf');
const axois = require('axios');
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarysearchString = `
const binarySearch = function search(arr, x) {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return undefined;
}`
try {
    bot.start((ctx) => ctx.reply('Welcome to Mohini\'s Algo Bot')); //start
    bot.command('binarysearch', (ctx) => ctx.reply(binarysearchString)); //return binary search
    bot.command('toplinuxcommands', (ctx) => ctx.reply('ls cd pwd grep rm'));
    bot.command('binarytreejs', async (ctx) => {
        const response = await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js');
        ctx.reply(response.data);
    })
    bot.on('text', (ctx) => {
        console.log(ctx.update.message);
        if (ctx.update.message.text == 'I love you') {
            ctx.reply('love you too broo');
        } else {
            ctx.reply('i don\'t understand humans')
        }
    });
    bot.on('sticker', (ctx) => ctx.reply('❤️'));
    bot.launch();
} catch {
    console.log("unexpected command")
}
