from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from api.v1.user_routes import router as user_router

app = FastAPI()


@app.get("/", include_in_schema=False)
def redirect_to_docs():
    """Automatikusan átirányít a Swagger UI dokumentációra."""
    return RedirectResponse(url="/docs")


app.include_router(user_router, prefix="/api/v1")
