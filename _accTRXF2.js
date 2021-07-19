/*CMD
  command: /accTRXF2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//acc
var deposit = options.amount
Bot.sendMessage(
 "*➕ Investment Accrual : *"+2*deposit+ " *TRX*"
)

var balance = Libs.ResourcesLib.userRes("balance")
balance.add(2 * deposit)
var depo = Libs.ResourcesLib.userRes("deposit")
depo.add(-deposit)
let profit = Libs.ResourcesLib.userRes("profit")
profit.add(deposit)
