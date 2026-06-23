# SocialSphere

A social media feed application built using React, Node.js, Express.js and MongoDB Atlas.

## Features

- User Signup & Login
- Create Posts
- Public Feed
- Like Posts
- Comment on Posts
- Responsive UI

## Tech Stack

Frontend:
- React
- Material UI
- Axios

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- JWT


## Quick Start Guide

### Step 1: Create an Account

Open:

```text
http://localhost:5173/signup
```

Fill in:

* Username
* Email
* Password

Click **Sign Up**.

Example:

```text
Username: janet
Email: janet@test.com
Password: 123456
```

---

### Step 2: Login

Open:

```text
http://localhost:5173/
```

or

```text
http://localhost:5173/login
```

Enter:

```text
Email: janet@test.com
Password: 123456
```

Click **Login**.

After successful login, you will be redirected to the Feed page.

---

### Step 3: Create a Post

After login:

```text
http://localhost:5173/feed
```

Type your post and click:

```text
POST
```

Your post will appear in the public feed.

---

### Step 4: Like a Post

Click the:

```text
❤️ Like
```

button below any post.

---

### Step 5: Comment on a Post

Click the:

```text
💬 Comment
```

button.

Enter your comment in the popup and submit.

The comment count will update automatically.
