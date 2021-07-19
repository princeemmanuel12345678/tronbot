/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
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
var key = Bot.getProperty("channel");
let id = user.telegramid
Api.getChatMember({
  chat_id: key,
  user_id: id,
  on_result: "/onresult1"
})

var welco = User.getProperty("welco")
if (welco == undefined) {
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(0.01)
Bot.sendMessage("*💡Welcome Bonus 0.01 TRX*")
}
User.setProperty("welco", user.telegramid, "text")

function onAttracted(refUser){
var u = Libs.ReferralLib.currentUser.attractedByUser()
// access to Bonus Res of refUser
let res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  res.add(0.0);  // add 0.05000 bonus for friend
var refchatid= refUser.chatId;
var inf = "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
Bot.sendMessageToChatWithId(refUser.chatId,"🎯 You have a new Referral: "+inf);
}

Libs.ReferralLib.currentUser.track({
   onAtractedByUser: onAttracted
});
}
