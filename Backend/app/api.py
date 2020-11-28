from app.data_processing import process
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "locahost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}


@app.post("/uploads")
async def upload_file(file: UploadFile = File(...)):
    infile=file.file
    f = open("dataout.txt", "wb")
    lines = infile.readlines()
    #print(type(lines[0]))
    for  line in lines:
        f.write(line)
    f.close()
    process()
    return {"filename": file.filename}
