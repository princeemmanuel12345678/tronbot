/*CMD
  command: /banuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send User ID to ban :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("🛑 User " +message+ " Has Been Banned");
}else{
return
}

