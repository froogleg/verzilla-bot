from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton
import asyncio

TOKEN = "8742448377:AAFNme9QTgHB5mk10aiUFn9NcsSc0v-nWic"

bot = Bot(token=TOKEN)
dp = Dispatcher()

@dp.message_handler(commands=['start'])
async def start(message: types.Message):

    kb = ReplyKeyboardMarkup(resize_keyboard=True)

    web_app = WebAppInfo(
        url="https://твое-приложение.vercel.app"
    )

    btn = KeyboardButton(
        text="🚀 Открыть Verzilla",
        web_app=web_app
    )

    kb.add(btn)

    await message.answer(
        "Открывай приложение 👇",
        reply_markup=kb
    )

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())