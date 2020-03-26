# What is this?

It's a simple node.js application written in TypeScript to have an example, which can be containerized.

# Path of Demonstration

Show the GitHub project: [https://github.com/JensNixdorf/simple-readline-node-sample]

## Show in Visual Studio Code

Show Example program in VS Code (with Launch config)

Show diagram

Show Docker Extension for VS Code

Show Docker File

Show scripts in package.json and VS Code

Show Docker Desktop
* Config for disk space management
* Checkbox to start Kubernets Node

Build the image from within VS Code NPM Scripts and show on Docker Desktop and Docker extension
```
docker image build -t simple-readline-node-sample .
```

## Switch in CLI

Run a container for the first time
```
docker run -it --name simple-sample  simple-readline-node-sample
```

Stop the container
```
docker stop simple-sample
```

Rerun the container
```
docker start simple-sample && docker attach simple-sample
```

Connect via bash to container in parallel
```
docker container exec -it simple-sample bash
```

Monitor the directory
```
clear; ls -1
```

Create a new version of the image with a commit on the running container
```
docker commit simple-sample simple-readline-node-sample_v2
```

Export image as tar
```
docker save simple-readline-node-sample_v2 > export.tar
```

Copy to remote host
```
scp export.tar pi@HomePiOrigin:~/Documents/dev
```

Load the image in docker on the remote machine
```
docker load < export.tar
```

Run the image on the remote host
```
docker run -it --name simmple-sample simple-readline-node-sample_v2
```