from pydantic import BaseModel, Field
from typing import Optional
from datetime import date

#################### Test Data ####################

class TestDataBase(BaseModel):
    test_name: str
    category: str
    customer_price: float
    pathvision_b2b: float
    gd_b2b: float

class TestDataCreate(TestDataBase):
    pass

class TestDataUpdate(TestDataBase):
    pass

class TestDataResponse(TestDataBase):
    id: int

    class Config:
        from_attributes = True

#################### Category Data ####################

class CategoryBase(BaseModel):
    test_name: str = Field(..., min_length=1, max_length=255)
    category: str = Field(..., min_length=1, max_length=255)

class CategoryDataCreate(CategoryBase):
    pass

class CategoryDataUpdate(CategoryBase):
    pass

class CategoryDataResponse(CategoryBase):
    id: int

    class Config:
        from_attributes = True

#################### Doctor Data ####################

class DoctorBase(BaseModel):
    name: str
    contact: str
    degree: str
    percentage: float

class DoctorDataCreate(DoctorBase):
    pass

class  DoctorDataUpdate(DoctorBase):
    pass    

class DoctorDataResponse(DoctorBase):
    id: int

    class Config:
        from_attributes = True

#################### Doctor Bill Data ####################

class DoctorBillData(BaseModel):
    doctor_id: int
    patient_name: str
    total_amount: float
    date: date

class DoctorBillDataCreate(DoctorBillData):
    pass

class DoctorBillDataUpdate(DoctorBillData):
    pass

class DoctorBillDataResponse(DoctorBillData):
    id: int

    class Config:
        from_attributes = True

#################### End ####################