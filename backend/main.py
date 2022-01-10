from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os 

from model import User

from database import (
    fetch_one_user,
    create_user,
    update_user_pokemon,
)

app = FastAPI(title="root")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def read_root():
    return {"Not": "Found"}

@app.get("/app")
async def read_app(request: Request):
    return FileResponse('static/index.html', media_type='text/html')

@app.get("/api/users/{username}", response_model=User)
async def get_user_by_username(username):
    response = await fetch_one_user(username.lower())
    if response:
        return response
    raise HTTPException(404, f"Username and/or password is incorrect.")


@app.get("/api/users/{username}", response_model=User)
async def user_exists(username):
    response = await fetch_one_user(username.lower())
    if response:
        return response
    return False

@app.post("/api/users/", response_model=User)
async def post_user(user: User):
    user.username = user.username.lower()
    if len(user.username) < 3 or len(user.username) > 16:
        raise HTTPException(431, "Username must be between 3-16 characters long.") 
    if not user.username.isalnum():
        raise HTTPException(431, "Usernames must only contain numbers and/or letters.")
    if len(user.password) < 6:
        raise HTTPException(431, "Password must be 6 or more characters.")
    if await user_exists(user.username) == False:
        response = await create_user(user.dict())
        if response:
            return response
    raise HTTPException(400, "Username already exists.")

@app.put("/api/users/{username}/", response_model=User)
async def put_pokemon(username: str, pokemon: str):
    response = await update_user_pokemon(username, pokemon)
    if response:
        return response
    raise HTTPException(409, f"User {username} does not exist.")