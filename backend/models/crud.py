from sqlalchemy.orm import Session
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from models.model import TestData, CategoryData, DoctorData, DoctorBillData
from models import schema

################################ Test Data #################################

async def create_test_data(db: AsyncSession, test_data: schema.TestDataCreate):
    new_data = TestData(**test_data.dict())
    db.add(new_data)
    await db.commit()
    await db.refresh(new_data)
    return new_data

async def get_all_test_data(db: AsyncSession):
    result = await db.execute(select(TestData))
    return result.scalars().all()

async def update_test_data(db: AsyncSession, id: int, test_data: schema.TestDataUpdate):
    result = await db.execute(select(TestData).filter(TestData.id == id))
    db_data = result.scalars().first()
    if db_data:
        for key, value in test_data.dict().items():
            setattr(db_data, key, value)
        await db.commit()
        await db.refresh(db_data)
    return db_data

async def delete_test_data(db: AsyncSession, id: int):
    result = await db.execute(select(TestData).filter(TestData.id == id))
    db_data = result.scalars().first()
    if db_data:
        await db.delete(db_data)
        await db.commit()
    return db_data

################################ Category Data #################################

async def create_category_data(db: AsyncSession, category_data: schema.CategoryDataCreate):
    new_data = CategoryData(**category_data.dict())
    db.add(new_data)
    await db.commit()
    await db.refresh(new_data)
    return new_data

async def get_all_category_data(db: AsyncSession):
    result = await db.execute(select(CategoryData))
    return result.scalars().all()

async def update_category_data(db: AsyncSession, id: int, category_data: schema.CategoryDataUpdate):
    result = await db.execute(select(CategoryData).filter(CategoryData.id == id))
    db_data = result.scalars().first()
    if db_data:
        for key, value in category_data.dict().items():
            setattr(db_data, key, value)
        await db.commit()
        await db.refresh(db_data)
    return db_data

async def delete_category_data(db: AsyncSession, id: int):
    result = await db.execute(select(CategoryData).filter(CategoryData.id == id))
    db_data = result.scalars().first()
    if db_data:
        await db.delete(db_data)
        await db.commit()
    return db_data

################################ Doctor Data #################################

async def create_doctor_data(db: AsyncSession, doctor_data: schema.DoctorDataCreate):
    new_data = DoctorData(**doctor_data.dict())
    db.add(new_data)
    await db.commit()
    await db.refresh(new_data)
    return new_data

async def get_all_doctor_data(db: AsyncSession):
    result = await db.execute(select(DoctorData))
    return result.scalars().all()

async def update_doctor_data(db: AsyncSession, id: int, doctor_data: schema.DoctorDataUpdate):
    result = await db.execute(select(DoctorData).filter(DoctorData.id == id))
    db_data = result.scalars().first()
    if db_data:
        for key, value in doctor_data.dict().items():
            setattr(db_data, key, value)
        await db.commit()
        await db.refresh(db_data)
    return db_data

async def delete_doctor_data(db: AsyncSession, id: int):
    result = await db.execute(select(DoctorData).filter(DoctorData.id == id))
    db_data = result.scalars().first()
    if db_data:
        await db.delete(db_data)
        await db.commit()
    return db_data

################################ Doctor Bill Data #################################

async def create_doctor_bill_data(db: AsyncSession, doctor_bill_data: schema.DoctorBillDataCreate):
    new_data = DoctorBillData(**doctor_bill_data.dict())
    db.add(new_data)
    await db.commit()
    await db.refresh(new_data)
    return new_data

async def get_all_doctor_bill_data(db: AsyncSession):
    result = await db.execute(select(DoctorBillData))   
    return result.scalars().all()

async def update_doctor_data(db: AsyncSession, id: int, doctor_bill_data: schema.DoctorBillDataUpdate):
    result = await db.execute(select(DoctorBillData).filter(DoctorBillData.id == id))
    db_data = result.scalars().first()
    if db_data:
        for key, value in doctor_bill_data.dict().items():
            setattr(db_data, key, value)
        await db.commit()
        await db.refresh(db_data)
    return db_data

async def delete_doctor_data(db: AsyncSession, id: int):
    result = await db.execute(select(DoctorBillData).filter(DoctorBillData.id == id))
    db_data = result.scalars().first()
    if db_data:
        await db.delete(db_data)
        await db.commit()
    return db_data

################################ End #################################