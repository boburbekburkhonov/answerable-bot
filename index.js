import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config()

const bot = new TelegramBot(process.env.TOKEN, {
  polling: true
})

bot.onText(/\/start/, async (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Salom ${msg.from?.first_name}. Savollaringiz bo'lsa berishingiz mumkin.Pastdan 1-chi savol turini tanlang.`,
    {
      reply_markup: {
        keyboard: [
          ["Shaxsiy savolim bor🔒", "Ish yuzasidan📈"],
        ],
        resize_keyboard: true,
      },
    }
  );

  await bot.sendMessage(
    "-4056090084",
    `Botga ${msg.from?.first_name} lik va username mi ${msg.from?.username} user kirib kurdi`)
});

bot.on("message", (msg) => {
  if (msg.text == "Shaxsiy savolim bor🔒") {
    bot.sendMessage(msg.chat.id, `
    Agar savolingiz bo'lsa iltimos shu ko'rinishda bering!
    1.***********,
    2.***********,
    3.***********.`,

    {
      reply_markup: {
        keyboard: [
          ["Back 🔙"],
        ],
        resize_keyboard: true,
      },
    }
    )
  }

  if (msg.text == "Ish yuzasidan📈") {
    bot.sendMessage(msg.chat.id, `
    Agar savolingiz bo'lsa iltimos shu ko'rinishda bering!
    1.***********,
    2.***********,
    3.***********.`,

    {
      reply_markup: {
        keyboard: [
          ["Back 🔙"],
        ],
        resize_keyboard: true,
      },
    }
    )
  }

  if (msg.text == "Back 🔙") {
    bot.sendMessage(msg.chat.id, "Asosiy menyu", {
      reply_markup: {
        keyboard: [
          ["Shaxsiy savolim bor🔒", "Ish yuzasidan📈"],
        ],
        resize_keyboard: true,
      },
    });
  }
});