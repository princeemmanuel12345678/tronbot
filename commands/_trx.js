/*CMD
  command: /trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 1 ){
Bot.sendMessage("*❌ You have to own at least 1 TRX in your wallet to withdraw!*")
}else{
Bot.sendKeyboard("🚫Exit","📤 _How many TRX you want to withdraw?_\n\n*Minimum:* `1 TRX`"+"\n"+"*Maximum:* `"+res.value().toFixed(8)+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/withtrx")
}
