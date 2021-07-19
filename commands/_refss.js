/*CMD
  command: /refss
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🕵️ refer
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
return
}
if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("TronUniverseV1Bot","131")
let TRX = 10*refcom.value()


let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{title:"↗️ Share",url:"https://t.me/share/url?url="+bot}]]

Bot.sendMessage("*👥 Refferrals System*" + "\n\n*1 Level:*" + "\n*🥇 Level°1 - 5%*")
Bot.sendMessage("*👨‍👨‍👦‍👦 Refferral direct bot url:* " +"["+bot+"]")
Bot.sendInlineKeyboard(key,"*👥 Refferral Statistics*" + "\n\n*1° Level:* " +reflist.length+ " users" + "\n\n*👥 Refferral Deposits:* "  + "\n" +TRX.toFixed(8) + " *TRX*" +
 "\n*♾ Earnings:* " + "\n" +refcom.value().toFixed(8) + " *TRX*")
