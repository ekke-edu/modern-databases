from repositories.user_repository import UserRepository

class UserService:
    def __init__(self):
        self.repo = UserRepository()

    async def create_user(self, user_data: dict):
        return await self.repo.create(user_data)

    async def get_users(self):
        return await self.repo.get_all()

    async def get_user(self, user_id: str):
        return await self.repo.get_by_id(user_id)

    async def update_user(self, user_id: str, data: dict):
        return await self.repo.update(user_id, data)

    async def delete_user(self, user_id: str):
        return await self.repo.delete(user_id)