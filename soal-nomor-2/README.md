# COMMAND DOCKER
docker build -t testing/welcome .
docker run -d -p 8000:5000 testing/welcome
