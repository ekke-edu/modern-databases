from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()

class Settings(BaseSettings):
    MONGO_CONNECTION_STRING: str = os.getenv("MONGO_CONNECTION_STRING")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME")

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()