/*CMD
  command: /wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
Bot.sendKeyboard("🚫Exit","🎗 Send me your TRX Address to use it for all future withdrawals!")
Bot.runCommand("wallet")
