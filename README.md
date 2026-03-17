[![Version](https://img.shields.io/badge/version-alpha-red)](https://github.com/lighscent/Docking/tree/alpha) [![Node.js CI](https://img.shields.io/badge/node-%3E%3D24.0.0-brightgreen)](https://nodejs.org/) [![License](https://img.shields.io/badge/license-GPLv3-blue)](LICENSE) [![Docker](https://img.shields.io/badge/docker-ready-blue)](https://www.docker.com/) [![EJS](https://img.shields.io/badge/view-ejs-orange)](https://ejs.co/) [![Express](https://img.shields.io/badge/framework-express-lightgrey)](https://expressjs.com/)

# What is this?

Docking is a simple home-made dashboard for managing Docker containers and more. 

> [!WARNING]
> Please, do not use in production. Docking is actually in an alpha stage. It is currently unsecured and intended for local development or testing only.

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

> Tested with Node.js v24.x

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