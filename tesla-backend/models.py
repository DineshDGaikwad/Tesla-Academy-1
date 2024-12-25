from pydantic import BaseModel, Field, validator
from typing import List, Optional
from bson import ObjectId

# Course model representing individual course details
class Course(BaseModel):
    title: str
    description: str
    img: str

    class Config:
        schema_extra = {
            "example": {
                "title": "Introduction to Python",
                "description": "Learn the basics of Python programming.",
                "img": "https://example.com/python-course.jpg"
            }
        }

# CourseData model representing a collection of courses under a specific class name
class CourseData(BaseModel):
    id: Optional[str] = Field(None, alias="_id")  # MongoDB _id field alias
    class_name: str
    courses: List[Course]

    class Config:
        schema_extra = {
            "example": {
                "class_name": "Programming 101",
                "courses": [
                    {
                        "title": "Introduction to Python",
                        "description": "Learn the basics of Python programming.",
                        "img": "https://example.com/python-course.jpg"
                    },
                    {
                        "title": "Advanced JavaScript",
                        "description": "Deep dive into JavaScript concepts.",
                        "img": "https://example.com/js-course.jpg"
                    }
                ]
            }
        }

    @validator("id", pre=True, always=True)
    def validate_object_id(cls, value: Optional[str]):
        """Validate that the id is a valid ObjectId string if provided."""
        if value and not ObjectId.is_valid(value):
            raise ValueError("Invalid ObjectId format")
        return str(value) if value else None  # Convert to string for consistency

    @validator("courses", pre=True)
    def validate_courses(cls, courses: List[Course]):
        """Ensure that the courses list is valid and non-empty."""
        if not courses:
            raise ValueError("The courses list cannot be empty.")
        return courses
