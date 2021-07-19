/*CMD
  command: /admintrans
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel

  <<ANSWER
➡️ 🚨 Send User ID to transfer Admin Panel :


⚠️ *Attention :*
*If you transfer Admin Panel you will not be able to access panel.*

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("admin_chat", msg, "integer");
Bot.sendMessage("*🚨 Bot Admin Panel Transferred to user* " +message)
}else{
return
}

