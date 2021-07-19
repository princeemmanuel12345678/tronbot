/*CMD
  command: /setab
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send about button text : 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.setProperty("about",message,"string")
Bot.sendMessage("About Text set to " +message)
}else{
return
}
