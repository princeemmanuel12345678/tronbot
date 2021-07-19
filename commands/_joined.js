/*CMD
  command: /joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⛔️joined
CMD*/

let id = user.telegramid
var key = Bot.getProperty("channel");
Api.getChatMember({
  chat_id: key,
  user_id: id,
  on_result: "/onresult1"
})
