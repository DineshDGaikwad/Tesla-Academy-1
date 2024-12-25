import os
from motor.motor_asyncio import AsyncIOMotorClient
from typing import Optional
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

# MongoDB connection details, using environment variables for sensitive data
MONGODB_URI: str = os.getenv("MONGODB_URI", "mongodb+srv://Dinesh2863:Dinu@cluster0.ctjos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
DATABASE_NAME: str = os.getenv("DATABASE_NAME", "tesla_academy")

# Check if MongoDB URI and database name are set
if not MONGODB_URI or not DATABASE_NAME:
    raise ValueError("MongoDB URI or database name is missing. Check your environment variables.")

# Initialize MongoDB client and specify the database
client: AsyncIOMotorClient = AsyncIOMotorClient(MONGODB_URI)
db = client[DATABASE_NAME]

async def get_database() -> Optional[AsyncIOMotorClient]:
    """Returns the MongoDB database instance."""
    try:
        return db
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None

async def close_database_connection() -> None:
    """Closes the MongoDB connection gracefully."""
    client.close()

# Optional: Close the database connection if running the file directly
if __name__ == "__main__":
    import asyncio
    loop = asyncio.get_event_loop()
    loop.run_until_complete(close_database_connection())
