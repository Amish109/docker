<!-- COPY folder . copies contents of folder into current directory (doesn't preserve the folder name).
COPY folder ./folder copies the entire folder (with its name) into current directory -->


**CREATE DOCKER FILE**
**AFTER CREATING A DOCKER FILE BUILD IT**
sudo docker build -t your-image-name . 
<!-- . means <path to your docker file> --> 
<!-- also we can tag the imaage name like my_image_name:latest -->


## 1. Pass environment variables directly via docker run
docker run -p 3000:9000 -e MY_VAR=value -e ANOTHER_VAR=value typescript-express-app

## 2.  Use an env file
Create a file, e.g. .env or /etc/typescript-express-app with:
Then run:
docker run --env-file /etc/typescript-express-app -p 3000:9000 typescript-express-app


docker-compose up --build (if we have docker compose yml)



============================================================================

  1. Stopped all existing containers
  docker stop $(docker ps -q)
  2. Cleared Docker cache completely
  docker system prune -f && docker builder prune -f
  2. This freed up 21.46GB of stale cache/build layers that may have been corrupted or outdated.
  3. Force rebuilt with --no-cache
  docker-compose build --no-cache api dashboard
  3. This ensured fresh builds without using any cached layers.
  4. Then started fresh
  docker-compose up -d

  Most Likely Cause of Your Issue

============================================================================
