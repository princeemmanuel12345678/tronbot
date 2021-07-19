/*CMD
  command: /gifUuu
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send User ID to send Gift :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb2");
}else{
return
}

//You need to send user id after running this command
