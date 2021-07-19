/*CMD
  command: D
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var mustinv = Libs.ResourcesLib.userRes("mustinv")
var limit = Libs.ResourcesLib.userRes("limittrx")
var limitval = Libs.ResourcesLib.userRes("limitval")
var limmsg = "✅ *24 hours passed from last withdrawal*";
var mimsg = "💳 *Deposit at least 1 TRX*\n🌀 *Status:*  TRX / 1 TRX";
if (mustinv.value() < 1){
Bot.sendMessage("*🔐 To withdraw, you need to complete the following missions:*"+"\n\n"+ limmsg +"\n\n"+mimsg)
}else{
var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 1 ){
Bot.sendMessage("❌ Minimum amount to withdraw 1 TRX")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many TRX you want to withdraw?_\n\n*Minimum:* 1 TRX"+"\n"+"*Maximum:* "+res.value().toFixed(8)+"*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/withtrx")
}
}
