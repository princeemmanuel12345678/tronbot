/*CMD
  command: /keys
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
var key = [[{title:"🔐 Private Key",command:"/pkey"},{title:"🔒 Public Key",command:"/pukey"}],[{title:"🏤 Live Balance",command:"/FF"}]]

Bot.sendInlineKeyboard(key,"Welcome here, You can Manage your Coinpayemnts Api Keys")
}else{
return
}
