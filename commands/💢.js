/*CMD
  command: 💢
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                                 

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let profit = Libs.ResourcesLib.userRes("profit");
let refcom = Libs.ResourcesLib.userRes("refcom");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

Bot.sendKeyboard("🏦 Investment History,\n➖ Withdrawals History,📟 Calculator,\n☎️ Support,🎇 Wallet,\n🚫Exit","*💢 Account Balance*\n\n*🎀 Withdrawable Balance: *\n"+res.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*res.value()+ "\n\n*💎 Active Investment: * \n" +deposit.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*deposit.value() + "\n\n*🎯 Total Profit:* \n" +profit.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*profit.value() + "\n\n*🕵️ Affiliate Earnings:*\n" +refcom.value().toFixed(8) +" TRX ~ $" +TRX.toFixed(2)*refcom.value() + "\n\n*🎇 Total Withdrawn:*\n" +withdraw.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*withdraw.value() + "\n\n*🤖 Bot Time:* *" +time+"*\n")

}
