/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input Message:
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid

var msg = message
var b = [
    [
      {
        title: "Reply to Admin ",
        command: "/message"
      }
    ]
  ]
  Bot.sendInlineKeyboardToChatWithId(
    tgid,
    b,
    "📩 New Support Message\nFrom Admin:" + "\nMessage: " + msg
  )
Bot.sendMessage("Message Was Sent")
