/*CMD
  command: /withh
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ➖ withdrawals history
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var his = User.getProperty("historyw")
if(his == undefined){
var go ="*🧾 Withdrawals History*"+ "\n_Here you can find your last 15 pending or paid withdrawals_";
Bot.sendMessage(go)
}else{
Bot.sendMessage("*🧾 Withdrawals History*\n_Here you can find your last 17 pending and paid withdrawals_\n"+his)
}
