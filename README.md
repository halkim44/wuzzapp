# wuzzapp

full stack chat messaging app.

## Getting Started

- how to run with docker:

```bash
docker compose watch
# or running it separately like so :

docker compose watch app # running the nextjs app only
docker compose watch db # to run the database
```

- how to run without docker:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### First Stage

- [ ] use nextjs, nodejs and postgresql
- [ ] user can signup and login with username and email. (simple)
- [ ] user can search for a user by username.
- [ ] send chat to user.
- [ ] add/accept friends.

### Page Plans

1. login/signup page.
2. home page.
3. search user.
4. chat/id
