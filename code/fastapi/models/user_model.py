from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class UserModel(BaseModel):
    name: str
    email: EmailStr
    age: int