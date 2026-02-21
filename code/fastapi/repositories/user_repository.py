from bson import ObjectId
from db.mongodb import get_collection
from schemas.user_schema import user_helper

class UserRepository:
    def __init__(self):
        self.collection = get_collection("users")

    async def create(self, user_data: dict):
        result = await self.collection.insert_one(user_data)
        return await self.get_by_id(str(result.inserted_id))

    async def get_all(self):
        users = []
        async for user in self.collection.find():
            users.append(user_helper(user))
        return users

    async def get_by_id(self, user_id: str):
        user = await self.collection.find_one({"_id": ObjectId(user_id)})
        if user:
            return user_helper(user)
        return None

    async def update(self, user_id: str, data: dict):
        await self.collection.update_one(
            {"_id": ObjectId(user_id)},
            {"$set": data}
        )
        return await self.get_by_id(user_id)

    async def delete(self, user_id: str):
        result = await self.collection.delete_one({"_id": ObjectId(user_id)})
        return result.deleted_count == 1