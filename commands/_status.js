/*CMD
  command: /status
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🛄 statistics
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
let TRX = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
let reinvest = Libs.ResourcesLib.anotherChatRes("reinvest", "global");
Bot.sendMessage("*👤 Total Investors:* " +tota.value()+ "\n\n*➕ Total Deposits: * " +depo.value().toFixed(8) + " TRX " + "\n\n*⭐ Total Reinvest: * " +reinvest.value().toFixed(8) + " TRX " + "\n\n*➖ Total Withdrawals:* " +TRX.value().toFixed(8) + " TRX ")
}

