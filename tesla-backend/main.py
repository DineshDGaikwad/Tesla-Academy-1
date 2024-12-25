# from fastapi import FastAPI, APIRouter, HTTPException
# from motor.motor_asyncio import AsyncIOMotorClient
# from pydantic import BaseModel
# from typing import List, Dict
# import os
# from fastapi.middleware.cors import CORSMiddleware
# from dotenv import load_dotenv

# # Load environment variables from the .env file
# load_dotenv()

# # MongoDB connection configuration
# MONGODB_URI = os.getenv("MONGODB_URI")
# DATABASE_NAME = os.getenv("DATABASE_NAME")

# # Check that environment variables are set
# if not MONGODB_URI or not DATABASE_NAME:
#     raise EnvironmentError("Environment variables MONGODB_URI and DATABASE_NAME must be set in .env")

# # Initialize MongoDB client and database
# try:
#     client = AsyncIOMotorClient(MONGODB_URI)
#     db = client[DATABASE_NAME]
# except Exception as e:
#     raise ConnectionError(f"Failed to connect to MongoDB: {str(e)}")

# # Initialize FastAPI app and router
# app = FastAPI()
# router = APIRouter()
# print('appp',router)
# # Configure CORS to allow requests from frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # Update with frontend URL if needed
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Course model for structured response
# class Course(BaseModel):
#     title: str
#     description: str
#     img: str

#     class Config:
#         schema_extra = {
#             "example": {
#                 "title": "Introduction to Python",
#                 "description": "Learn the basics of Python programming.",
#                 "img": "https://example.com/python-course.jpg"
#             }
#         }

# # Endpoint to fetch courses by standard
# @router.get("/courses", response_model=Dict[str, List[Course]])
# async def read_courses():
#     try:
#         # Retrieve the document containing all courses data
#         courses_data = await db["courses"].find_one()  # Ensure 'courses' is the correct collection name
        
#         if not courses_data or "courses" not in courses_data:
#             raise HTTPException(status_code=404, detail="No courses found.")

#         # Parse and structure the data
#         response_courses = {
#             class_name: [Course(**course) for course in course_list]
#             for class_name, course_list in courses_data["courses"].items()
#         }

#         return response_courses
    
#     except HTTPException as e:
#         raise e  # Re-raise custom HTTP exceptions
#     except Exception as e:
#         # Catch-all for other errors, with detailed logging for debugging
#         raise HTTPException(status_code=500, detail=f"Error retrieving courses: {str(e)}")

# # Include the router in the main app
# #app.include_router(router)
# app.include_router(router, prefix="/courses", tags=["Courses"])
# print('tttttt')


# # Note: Run the application with the command: `uvicorn main:app --reload`



from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Import routers
from admin_routes import router as admin_router

# Load environment variables from .env
load_dotenv()

# MongoDB connection configuration
MONGODB_URI = os.getenv("MONGODB_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

if not MONGODB_URI or not DATABASE_NAME:
    raise EnvironmentError("Environment variables MONGODB_URI and DATABASE_NAME must be set in .env")

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with frontend URL if different
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Application startup and shutdown events for database
@app.on_event("startup")
async def startup_event():
    try:
        client = AsyncIOMotorClient(MONGODB_URI)
        app.state.db = client[DATABASE_NAME]
    except Exception as e:
        raise ConnectionError(f"Failed to connect to MongoDB: {str(e)}")

@app.on_event("shutdown")
async def shutdown_event():
    app.state.db.client.close()

# Include routers
app.include_router(admin_router, prefix="/courses", tags=["Courses"])
