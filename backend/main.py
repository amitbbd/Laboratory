import asyncio
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models.database import engine, get_db, lifespan
from models import model, schema, crud

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any origin (for testing)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)       

############################# Test Data #################################

@app.post("/test-data/", response_model=schema.TestDataResponse)
async def create_test_data(test_data: schema.TestDataCreate, db: Session = Depends(get_db)):
    return await crud.create_test_data(db, test_data)

@app.get("/test-data/", response_model=list[schema.TestDataResponse])
async def get_all_test_data(db: Session = Depends(get_db)):
    return await crud.get_all_test_data(db)

@app.put("/test-data/{id}", response_model=schema.TestDataResponse)
async def update_test_data(id: int, test_data: schema.TestDataUpdate, db: Session = Depends(get_db)):
    db_data = await crud.update_test_data(db, id, test_data)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return db_data

@app.delete("/test-data/{id}")
async def delete_test_data(id: int, db: Session = Depends(get_db)):
    db_data = await crud.delete_test_data(db, id)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return {"message": "Data deleted"}

############################# Category Data #############################
@app.post("/category-data/", response_model=schema.CategoryDataResponse)
async def create_category_data(category_data: schema.CategoryDataCreate, db: Session = Depends(get_db)):
    return await crud.create_category_data(db, category_data)

@app.get("/category-data/", response_model=list[schema.CategoryDataResponse])
async def get_all_category_data(db: Session = Depends(get_db)):
    return await crud.get_all_category_data(db)

@app.put("/category-data/{id}", response_model=schema.CategoryDataResponse)
async def update_category_data(id: int, category_data: schema.CategoryDataUpdate, db: Session = Depends(get_db)):
    db_data = await crud.update_category_data(db, id, category_data)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return db_data

@app.delete("/category-data/{id}")
async def delete_category_data(id: int, db: Session = Depends(get_db)):
    db_data = await crud.delete_category_data(db, id)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return {"message": "Data deleted"}

############################# Doctor Data #############################
@app.post("/doctor-data/", response_model=schema.DoctorDataResponse)
async def create_doctor_data(doctor_data: schema.DoctorDataCreate, db: Session = Depends(get_db)):
    return await crud.create_doctor_data(db, doctor_data)

@app.get("/doctor-data/", response_model=list[schema.DoctorDataResponse])
async def get_all_doctor_data(db: Session = Depends(get_db)):
    return await crud.get_all_doctor_data(db)

@app.put("/doctor-data/{id}", response_model=schema.DoctorDataResponse)
async def update_doctor_data(id: int, doctor_data: schema.DoctorDataUpdate, db: Session = Depends(get_db)):
    db_data = await crud.update_doctor_data(db, id, doctor_data)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return db_data

@app.delete("/doctor-data/{id}")
async def delete_doctor_data(id: int, db: Session = Depends(get_db)):
    db_data = await crud.delete_doctor_data(db, id)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return {"message": "Data deleted"}

############################# Doctor Bill Data #############################

@app.post("/doctor-bill-data/", response_model=schema.DoctorBillDataResponse)
async def create_doctor_bill_data(doctor_data: schema.DoctorBillDataCreate, db: Session = Depends(get_db)):
    return await crud.create_doctor_bill_data(db, doctor_data)

@app.get("/doctor-bill-data/", response_model=list[schema.DoctorBillDataResponse])
async def get_all_doctor_bill_data(db: Session = Depends(get_db)):
    return await crud.get_all_doctor_bill_data(db)

@app.put("/doctor-bill-data/{id}", response_model=schema.DoctorBillDataResponse)
async def update_test_bill_data(id: int, doctor_data: schema.DoctorBillDataUpdate, db: Session = Depends(get_db)):
    db_data = await crud.update_doctor_bill_data(db, id, doctor_data)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return db_data

@app.delete("/doctor-bill-data/{id}")
async def delete_doctor_bill_data(id: int, db: Session = Depends(get_db)):
    db_data = await crud.delete_doctor_bill_data(db, id)
    if db_data is None:
        raise HTTPException(status_code=404, detail="Data not found")
    return {"message": "Data deleted"}


############################# End #############################