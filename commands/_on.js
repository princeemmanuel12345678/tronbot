/*CMD
  command: /on
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result.address;
Bot.sendMessage("⚠️ _If you send less than 1.00000000 TRX, your deposit will be igonred!_\n\n✅* Send the amount you want to invest to the following address:*")
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowall",wallet,"string")

