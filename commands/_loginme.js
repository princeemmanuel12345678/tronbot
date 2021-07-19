/*CMD
  command: /loginme
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ..
  keyboard: 
  aliases: 
CMD*/


let msg = "Access denied. Password is: `Incorrect`"

if(message=="Usuario01"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You admin now. Please wait messages from users";
}

Bot.sendMessage(msg);

