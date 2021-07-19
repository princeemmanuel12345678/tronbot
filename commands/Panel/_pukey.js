/*CMD
  command: /pukey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel

  <<ANSWER
Send your new Public Key :

*⚠️ Attention :*
*Don't give your api keys to anyone*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
Bot.sendMessage("✅ Done: Your New Private Key is\n "+"`"+message+"`");
Bot.setProperty("Pukey" , message,"string")
Bot.runCommand("/ser56")
}else{
return
}
