/*CMD
  command: /unbanuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send User ID to Unban :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("✅ User " +message+ " Has Been Unbanned");
}else{
return
}

