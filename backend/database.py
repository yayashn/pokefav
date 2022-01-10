from model import User
import motor.motor_asyncio
from dotenv import dotenv_values
import os

config = dotenv_values(".env")
MONGODB_URI = config.get("MONGODB_URI")
if os.getenv("MONGODB_URI"): MONGODB_URI = os.getenv("MONGODB_URI")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URI)
database = client.Users
collection = database.user

async def fetch_one_user(username):
    document = await collection.find_one({"username": username})
    return document

async def fetch_all_users():
    users = []
    cursor = collection.find({})
    async for document in cursor:
        users.append(User(**document))
    return users

async def create_user(user):
    document = user
    result = await collection.insert_one(document)
    return document

async def update_user_pokemon(username, pokemon):
    await collection.update_one({"username": username}, {"$set": {"pokemon": pokemon}})
    document = await collection.find_one({"username": username})
    return document