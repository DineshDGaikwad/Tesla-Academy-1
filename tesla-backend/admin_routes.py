# from fastapi import APIRouter, HTTPException, Depends
# from pydantic import BaseModel
# from typing import List
# from motor.motor_asyncio import AsyncIOMotorDatabase

# router = APIRouter()
# print('routerrrr',APIRouter())
# # Pydantic models
# class Course(BaseModel):
#     title: str
#     description: str
#     img: str
#     standard:str

# class AdminCourseRequest(BaseModel):
#     class_name: str
#     courses: List[Course]

# # Dependency to get database
# def get_db(request):
#     return request.app.state.db

# @router.post("/add")
# async def add_or_update_courses(data: AdminCourseRequest, db: AsyncIOMotorDatabase = Depends(get_db)):
#     """Add or update courses for a specific class."""
#     try:
#         result = await db["courses"].update_one(
#             {"class_name": data.class_name},
#             {"$set": {"courses": [course.dict() for course in data.courses]}},
#             upsert=True
#         )
#         print('resultttt',result)
#         message = "Courses updated successfully." if result.modified_count > 0 else "Courses added successfully."
#         return {"message": message}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error adding/updating courses: {str(e)}")

# @router.delete("/{class_name}/{index}")
# async def delete_course(class_name: str, index: int, db: AsyncIOMotorDatabase = Depends(get_db)):
#     """Delete a course from a specific class."""
#     try:
#         courses_doc = await db["courses"].find_one({"class_name": class_name})
#         if not courses_doc:
#             raise HTTPException(status_code=404, detail="Class not found.")

#         updated_courses = courses_doc["courses"]
#         if index < 0 or index >= len(updated_courses):
#             raise HTTPException(status_code=400, detail="Invalid course index.")

#         updated_courses.pop(index)
#         await db["courses"].update_one({"class_name": class_name}, {"$set": {"courses": updated_courses}})
#         return {"message": "Course deleted successfully."}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error deleting course: {str(e)}")





from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Dict
from motor.motor_asyncio import AsyncIOMotorDatabase

# Define the router
router = APIRouter()

# Database dependency
def get_db(request):
    return request.app.state.db

# Models
class Course(BaseModel):
    title: str
    description: str
    img: str
    standard: str

    class Config:
        schema_extra = {
            "example": {
                "title": "Introduction to Python",
                "description": "Learn Python programming basics.",
                "img": "https://example.com/python-course.jpg",
                "standard": "10th",
            }
        }

class AdminCourseRequest(BaseModel):
    class_name: str
    courses: List[Course]
print('courses----',AdminCourseRequest)
# Add or update courses
@router.post("/add")
async def add_or_update_courses(data: AdminCourseRequest, db: AsyncIOMotorDatabase = Depends(get_db)):
    print("Received data:--------", data.dict())  
    try:
        result = await db["courses"].update_one(
            {"class_name": data.class_name},
            {"$set": {"courses": [course.dict() for course in data.courses]}},
            upsert=True
        )
        print('resultttt',result)
        message = "Courses updated successfully." if result.modified_count > 0 else "Courses added successfully."
        return {"message": message}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error adding/updating courses: {str(e)}")

# Delete a course by index
@router.delete("/{class_name}/{index}")
async def delete_course(class_name: str, index: int, db: AsyncIOMotorDatabase = Depends(get_db)):
    try:
        courses_doc = await db["courses"].find_one({"class_name": class_name})
        if not courses_doc:
            raise HTTPException(status_code=404, detail="Class not found.")

        updated_courses = courses_doc["courses"]
        if index < 0 or index >= len(updated_courses):
            raise HTTPException(status_code=400, detail="Invalid course index.")

        updated_courses.pop(index)
        await db["courses"].update_one({"class_name": class_name}, {"$set": {"courses": updated_courses}})
        return {"message": "Course deleted successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting course: {str(e)}")

# Fetch all courses
@router.get("/", response_model=Dict[str, List[Course]])
async def read_courses(db: AsyncIOMotorDatabase = Depends(get_db)):
    try:
        courses_data = await db["courses"].find_one()
        if not courses_data or "courses" not in courses_data:
            raise HTTPException(status_code=404, detail="No courses found.")

        return {
            class_name: [Course(**course) for course in course_list]
            for class_name, course_list in courses_data["courses"].items()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving courses: {str(e)}")
