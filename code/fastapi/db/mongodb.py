from motor.motor_asyncio import AsyncIOMotorClient
from core.config import settings

client = AsyncIOMotorClient(settings.MONGO_CONNECTION_STRING)
database = client[settings.DATABASE_NAME]

def get_collection(name: str):
    return database.get_collection(name)