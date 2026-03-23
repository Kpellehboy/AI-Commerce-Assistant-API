# 🤖 AI Commerce Assistant API

A full-stack AI-powered e-commerce backend that allows users to interact with a product database using natural language commands.

---

## Features

* Product Management (CRUD)
* AI Chat Interface (Rule-based NLP)
* Smart Search & Filtering
* User Authentication (JWT)
* Chat History Storage (MongoDB)
* Frontend Chat UI (WhatsApp-style)
* Mobile Responsive Design

---

## AI Capabilities

The system interprets natural language and performs operations like:

* Add product
* Update product
* Delete product
* Search products
* Filter by price/category

---

## Example Commands

```text
add product iphone 13 price 800 category electronics stock 5
show products
find iphone
products under 500
update product iphone 13 price 900
delete product iphone 13
```

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Frontend:** HTML, CSS, JavaScript
* **Authentication:** JWT
* **AI Logic:** Regex-based NLP

---

## Project Structure

```
config/
models/
controllers/
routes/
middleware/
frontend/

app.js
```

---

## Installation

```bash
# Clone repository
git clone https://github.com/Kpellehboy/AI-Commerce-Assistant-API.git

# Install dependencies
pnpm install

# Run server
pnpm run dev
```

---

## Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Products

* `POST /api/products`
* `GET /api/products`
* `PUT /api/products/:id`
* `DELETE /api/products/:id`

### AI Chat

* `POST /api/chat`

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Chat History

* `GET /api/history`

---

## Frontend Usage
Start chatting in `index.html`

---

## Example Workflow

1. Login → receive JWT token
2. Send message via chat UI
3. AI processes command
4. Backend performs database operation
5. Response displayed in UI

---

## Key Learning Outcomes

* REST API design
* MongoDB CRUD operations
* JWT authentication
* Natural language parsing using regex
* Full-stack integration (Frontend + Backend)

---

## Screenshots

*(Add your UI screenshots here)*

---

## Future Improvements

* Integrate real AI (OpenAI / LLM)
* Add payment system
* Role-based access (Admin/User)
* Deploy to cloud (Render / Netlify)

---

## Author

Elijah M. Flomo

elijahmflomo@gmail.com



---

## Acknowledgements

This project demonstrates how AI concepts can be simulated using rule-based systems for practical backend development.

---

