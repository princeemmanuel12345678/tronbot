/*CMD
  command: wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="βοΈ BACK"){
Bot.runCommand("/menu");
}else{
if(message.length==34){
Bot.sendKeyboard("π«Exit","π Done: Your new wallet is \n "+"`"+message+"`");
User.setProperty("wallet" , message,"string")
}else{
Bot.sendMessage("*π Error:* This is not a wallet address! Send /start to return to the menu, or send a correct address");
Bot.runCommand("/wallet")
}
}
