from fastapi import APIRouter, HTTPException
from models.user_model import UserModel
from services.user_service import UserService

router = APIRouter()
service = UserService()

@router.post("/users")
async def create_user(user: UserModel):
    return await service.create_user(user.dict())

@router.get("/users")
async def get_users():
    return await service.get_users()

@router.get("/users/{user_id}")
async def get_user(user_id: str):
    user = await service.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/users/{user_id}")
async def update_user(user_id: str, user: UserModel):
    updated = await service.update_user(user_id, user.dict())
    if not updated:
        raise HTTPException(status_code=404, detail="User not found")
    return updated

@router.delete("/users/{user_id}")
async def delete_user(user_id: str):
    deleted = await service.delete_user(user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "Deleted successfully"}