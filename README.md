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

### Start the mock server

```bash
json-server --watch data/db.json --port 8081
```