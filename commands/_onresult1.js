/*CMD
  command: /onresult1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}

let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
Bot.runCommand("/mainf");
}else{
var key = Bot.getProperty("channel")
Bot.sendKeyboard("⛔️Joined","💎 To use the bot, you have to join our payment hub @Phoenix_Admin\n " +key)
}
