/*CMD
  command: /checku
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send User ID to check balance :
  keyboard: 
  aliases: 
CMD*/

let msg = message
var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let check = Libs.ResourcesLib.anotherUserRes("balance", msg)
let checkk = Libs.ResourcesLib.anotherUserRes("deposit", msg)
let refc = Libs.ResourcesLib.anotherUserRes("refcom", msg)
let withdraw = Libs.ResourcesLib.anotherUserRes("withdraw", msg)
let profit = Libs.ResourcesLib.anotherUserRes("profit", msg)

Bot.sendMessage( "*👤 User Account Summary:*  "+
"\n\n➖ Withdrawable Balance:"+ "\n"+ check.value().toFixed(8) + " *TRX*"  + "\n\n💳 Active Investments: "+ "\n"+ checkk.value().toFixed(8) + " *TRX*" + "\n\n💰Total Profit:" + "\n" + profit.value().toFixed(8) + " *TRX*" +
"\n\n🎁 Total Affiliate Bonus:"+"\n"+ refc.value().toFixed(8) + " *TRX*" +  "\n\n💸Total Withdrawn:"+ "\n"+ withdraw.value().toFixed(8) + " *TRX*");
}else{
return
}
