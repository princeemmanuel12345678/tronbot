/*CMD
  command: /setbonam
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel

  <<ANSWER
Send the amount for Daily Bonus :

➡️ Eaxmple : *1* (0.01)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty("Bonu" , message , "integer");
Bot.sendMessage("*🎁 Daily Bonus Set to* " +message);
}else{
return
}

