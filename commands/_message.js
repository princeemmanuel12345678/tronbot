/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
☎️ *You are now in direct contact with the bot Administrator*
`Send me your complains and you will receive reply from the Administrator`
  ANSWER
  keyboard: 🚫Exit
  aliases: ☎️ support
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var admin_chat = Bot.getProperty("admin_chat")
let inf =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (!admin_chat) {
  Bot.sendMessage("Sorry. Bot have not admin now")
  return // exit
}
let msg = message
if (msg.length < 5) {
  Bot.sendMessage(
    "*⚠️ Please, send a longer message!*\n_Try to explain better what you need, as much as you can in a single message!_"
  )
} else {
  let user_link = Libs.commonLib.getLinkFor(user)
  let msg = message

  var b = [
    [
      {
        title: "Reply to user " + user.first_name,
        command: "/reply" + user.telegramid
      }
    ]
  ]

  Bot.sendInlineKeyboardToChatWithId(
    admin_chat,
    b,
    "📩 New Support Message\nFrom User: " + inf + "\nMessage: " + msg
  )
  Bot.sendMessage(
    "*Message sent to the administrator:*" + "\n" + message + "\n"
  )
}

