# Redux Toolkit Query Tutorial

### Install JSON Server `Globally`

```bash
npm install json-server -g
```

### Mock Data

Paste the following mock data in the `data/db.json` file

<details>
  <summary>Mock Data</summary>

```json
{
  // make sure this key here is the endpoint in your apiSlice, /todos
  // or else it will throw 404 error
  "todos": [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    }
  ]
}
```

</details>

### Concurrently running db server and react-server

- You will need two different terminal tabs to run this project.
- First tab will run the json-server watching command
- Second tab will run the frontend server of react
- However concurrently can solve this in just 1 single command and 1 tab.

> Below is the command to run json-server watching your data/db.json file and serving on port 8081. However you `don't need to run it`. Instead concurrently will take care of it.

```bash
json-server --watch data/db.json --port 8081
```

### Install concurrently

```bash
npm install concurrently --save-dev
```

### Edit `package.json`

Add these in package.json file...

```json
"reactStart": "react-scripts start",
// --kill-others swtich kills other commands below if any one get terminated
"start": "concurrently --kill-others \"json-server --watch data/db.json --port 8081\" \"npm run reactStart\"",
```

### Start the concurrent command

```bash
npm start
```
