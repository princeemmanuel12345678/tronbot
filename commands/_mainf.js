/*CMD
  command: /mainf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                              

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let res = Libs.ResourcesLib.userRes("balance");
let id = "@TronUniverseV1Bot"
Bot.sendKeyboard("💢 Balance ~ " + res.value().toFixed(8) + " TRX 💢" + "\n➕ Deposit,➰ Re-Invest,➖ Withdraw,\n🛄 Statistics,🎙 Payment Hub,\n💕 Bonus,🕵️ Refer,📟 Calculator,\n💡 About,💳 Set Wallet,☎️ Support","*🎯 New Bot Launched: Tron Universe*\n\n*☢️ Status: Instantly Paying*\n\n*🛄 Bot Started: 03/03/2021*\n\n*💕Claim Free Bonus Daily*\n\n*🏦 Investment Plan:*\n*💎 120% Profit For 24 Hours*\n\n*➕ Minimum Deposit: 1 TRX*\n*➖ Minimum Withdraw: 1 TRX*\n*➰ Minimum Reinvest: 1 TRX*\n*🚫 Withdrawal Fees: 0.2 TRX*\n*✅  Instant Withdrawal/Auto*\n*🕵️ Ref Bonus: 5%*\n\n*➕ Deposit TRX*\n\n*✅ Payment Method: TRX*")
