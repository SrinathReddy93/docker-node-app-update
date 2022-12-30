# docker-node-app-update
docker with node app, with code live update example.

# Problem
Once node dockerized app is running, then if we update code that changes is not reflecting in app, to achive this we have to rebuild the image and create a new container only that time changes will show.

# Solution
To solve this problem we use dockers volume and Bind mounts.

# Step 1
Create image,

docker build -t test:update .

# Step 2
Create a container

docker run -p 3003:80 -d --name live -v "/Users/srinathreddysrinath/Documents/docker_node/Learn Docker/docker-node-app-update":/app -v /app/node_modules test:update

# Explanations
-v "/Users/srinathreddysrinath/Documents/docker_node/Learn Docker/docker-node-app-update":/app

This is named volume with code directory pointing to docker directory(/app mentioned in Dockerfile)

-v /app/node_modules

This is will tell docker to don't overrided this node_modules folder

To check volues in dockers

docker volume ls
