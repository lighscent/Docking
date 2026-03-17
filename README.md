# What is this?

Docker Board is a simple home-made dashboard for managing Docker containers and images.

## Features

- View all containers, images
- Start/stop/remove containers  
- Pull images

## To-do

- View volumes, networks
- View container logs
- View container stats (CPU, memory, network)
- Create new containers

## Setup

1. Clone the repo and navigate to the project directory
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open `http://0.0.0.0:3000` in your browser (replace `0.0.0.0` with your server IP address)

## Needed

- Docker installed and running on the host machine
- Node.js installed on the host machine
- Access to the Docker socket (usually `/var/run/docker.sock`) for the Node.js process

## License

This project is licensed under the GNU GPL v3. See the [LICENSE](LICENSE) file for details.