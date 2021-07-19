/*CMD
  command: /with
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ➖ withdraw
CMD*/

var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "💼Set/Change Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set TRX wallet is:* not set\n\nIt will be used for all future withdrawals."
  )
} else {
Bot.runCommand("/trx")
}
