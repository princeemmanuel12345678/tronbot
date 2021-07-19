/*CMD
  command: /about
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 💡 about
CMD*/

var key = Bot.getProperty("about")
Bot.sendMessage("\n"+key)
