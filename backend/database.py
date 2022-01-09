import motor.motor_asyncio
from model import User

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
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