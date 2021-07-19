/*CMD
  command: /reinv
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ➰ re-invest
CMD*/

var res  = Libs.ResourcesLib.userRes("balance");
Bot.sendMessage("♻️ Reinvest your earnings here!\n\n💵 We offer only one Investment Plan, I hope you like it!\n\n1️⃣ *From 1 TRX to 1000 TRX\n120% daily for 1 day\n120.00% every 24 hours\nPaid every day*")
if (res.value() < 1){
Bot.sendKeyboard("Back 🔙","*❌ You can not reinvest right now:* You need at least 1 TRX to reinvest!")
}else{
Bot.sendKeyboard("Back 🔙","📤 How many TRX you want to Reinvest?\n\n*Minimum:* `1 TRX`"+"\n"+"*Maximum:* `"+res.value().toFixed(8)+ "` TRX " + "\n"+"\nMaximum amount corresponds to your balance"+"\n\n"+"*➡️ Send now the amount of you want to Reinvest*")
Bot.runCommand("/reinvest")
}
