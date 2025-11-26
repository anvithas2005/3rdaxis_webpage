from fastapi import FastAPI

app = FastAPI(title="3Dr Axis Labs API")


@app.get("/health")
def health_check():
  """Basic health endpoint so the server can start successfully."""
  return {"status": "ok"}

