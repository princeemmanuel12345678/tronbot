/*CMD
  command: /Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var key = [[{title:"🔄 Change Balance",command:"/addbUuu"},{title:"🎙 Broadcast",command:"/broadU"}],[{title:"💰 Check User Balance",command:"/checku"}],[{title:"🎁 Gift Sending",command:"/gifUuu"},{title:"🔮 Coinpayments",command:"/keys"}],[{title:"🛑 Ban User",command:"/banuser"},{title:"✅ Unban User",command:"/unbanuser"}],[{title:"🚧 Set Channel",command:"/setChan"}],[{title:"🕹 Transfer Admin Panel",command:"/admintrans"}],[{title:"🎁 Daily Bonus",command:"/setbons"}],[{title:"🔦 Set About Text",command:"/setab"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ "\nWelcome To the admin panel" + "\nWarning when using this panel please don't send any other command it may spoil your work")
}else{
return
}
