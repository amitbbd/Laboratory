from sqlalchemy import Column, Integer, String, Float, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class TestData(Base):
    __tablename__ = "price_table"

    id = Column(Integer, primary_key=True, index=True)
    test_name = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False)
    customer_price = Column(Float, nullable=False)
    pathvision_b2b = Column(Float)
    gd_b2b = Column(Float)

class CategoryData(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    test_name = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False)

class DoctorData(Base):
    __tablename__ = "doctor"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    contact = Column(String(100), nullable=False)
    degree = Column(String(100), nullable=False)
    percentage = Column(Float, nullable=False)

class DoctorBillData(Base):
    __tablename__ = "doctor_bill"

    id = Column(Integer, primary_key=True, index=True)
    doctor_id = Column(Integer, nullable=False)
    patient_name = Column(String(100), nullable=False)
    total_amount = Column(Float, nullable=False)
    date = Column(Date, nullable=False)
