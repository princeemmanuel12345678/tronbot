/*CMD
  command: /depoh
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🏦 investment history
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var his = User.getProperty("history")
if(his == undefined){
var go ="*➕ Last 17 Investments*\n`🎯 No Investments Found`";
Bot.sendMessage(go)
}else{
Bot.sendMessage("\n"+his)
}
