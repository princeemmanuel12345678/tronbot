/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🎇 wallet
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "💼 Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Your currently set TRX wallet is:* `not set`\n\n💹It will be used for *all future withdrawals.*");
}else{
var button = [
[{title : "💼 Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Your currently set TRX wallet is:* \n `"+wallet+"`\n\n💹It will be used for *all future withdrawals.*");
}
}
