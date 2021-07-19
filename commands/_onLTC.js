/*CMD
  command: /onLTC
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

        

var data = JSON.parse(content)

let price = data.ticker.price
let x = price*1
let wallet = options.result.address;
Bot.sendMessage("⚠️ _If you send less than " +x.toFixed(8)+ " LTC, your deposit will be igonred!_\n\n✅* Send the amount you want to invest to the following address:*")
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowallltc",wallet,"string")

