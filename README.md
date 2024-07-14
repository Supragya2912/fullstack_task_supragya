# Fullstack Notes Management

This project is a fullstack notes management system that allows users to add Notes via WebSocket and retrieve them through a RESTful API. Notes are stored in a Redis cache, and once the cache exceeds 50 items, the Notes are moved to a MongoDB database.

## Features

- **Add Notes**: Add new Notes by sending WebSocket messages.
- **Store in Redis**: Notes are temporarily stored in a Redis cache.
- **Move to MongoDB**: Once the Redis cache exceeds 50 items, Notes are moved to a MongoDB collection.
- **Fetch Notes**: Retrieve all Notes through a RESTful API endpoint.

## Technologies Used

- Node.js
- Express
- WebSocket (ws)
- Redis
- MongoDB (Mongoose)
- TypeScript

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Supragya2912/fullstack_task_supragya.git

    ```

2.  **Install dependencies:**

```
    cd todo-frontend
    npm install
```

```
    cd todo-be
    npm install
```

3.  **Setup .env file:**

    cd todo-be

```
    PORT=8081
    REDIS_HOST=<replace_by_redis_host>
    REDIS_PORT=<replace_by_redis_port>
    REDIS_USERNAME=<replace_by_redis_username>
    REDIS_PASSWORD=<replace_by_redis_password>
    MONGO_URI=<replace_by_mongo_db_uri>
    MONGO_DB=assignment
    MONGO_COLLECTION=assignment_supragya
    CORS_ORIGIN=http://localhost:3000
    REDIS_KEY=FULLSTACK_TASK_Supragya
```

4. **Start the todo-frontend and todo-be:**
```
    cd todo-frontend
    npm start
```

```
    cd todo-be
    npm start
```


5. **RESTFUL Api:**

    GET /fetchAllTasks