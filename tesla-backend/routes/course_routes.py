from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from typing import List
from .models import CourseData, Course  # Import the models for course data
from .database import get_database  # Import the database connection function

router = APIRouter()

@router.get("/courses", response_model=List[CourseData])
async def read_courses():
    # Retrieve the database instance
    database = await get_database()
    try:
        # Retrieve all course documents from the MongoDB collection
        courses_cursor = database["courses"].find()  # Ensure 'courses' is the correct collection name
        courses_list = await courses_cursor.to_list(length=None)  # Fetch all documents

        # Transform MongoDB documents into CourseData objects
        response_courses = []
        for course_doc in courses_list:
            if "courses" in course_doc:
                response_courses.append(
                    CourseData(
                        id=str(course_doc["_id"]),  # Convert MongoDB ObjectId to string for compatibility
                        class_name=course_doc.get("class_name", "Unknown"),  # Default to "Unknown" if no class name
                        courses=[
                            Course(
                                title=course["title"],
                                description=course["description"],
                                img=course["img"]
                            )
                            for course in course_doc["courses"]
                        ]
                    )
                )

        # Return the list of courses or an empty list if no data is found
        return response_courses if response_courses else []

    except Exception as e:
        # Catch and return any exceptions with detailed information
        raise HTTPException(status_code=500, detail=f"Error retrieving courses: {str(e)}")
