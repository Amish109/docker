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


