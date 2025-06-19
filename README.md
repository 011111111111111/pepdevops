# Journal Webpage (Docker + Nginx)

A modern, interactive journaling webpage with a neutral color palette, best UI practices, and local persistence. Served via Nginx in a Docker container.

## Features
- Add, view, and delete journal entries
- Entries are saved in your browser (localStorage)
- Responsive, clean, and neutral UI

## Quick Start

### 1. Build the Docker image
```sh
docker build -t app-journal .
```

### 2. Run the container
```sh
docker run -d -p 8088:80 --name my-journal journal-app
```

Now open [http://localhost:8088](http://localhost:8088) in your browser.

## File Structure
- `index.html` — Main HTML file
- `styles.css` — CSS for neutral, modern UI
- `script.js` — Handles interactivity and localStorage
- `Dockerfile` — Containerizes the app with Nginx

---

**To stop and remove the container:**
```sh
docker stop my-journal && docker rm my-journal
``` 