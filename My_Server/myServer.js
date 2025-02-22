const http = require("node:http");
const server = http.createServer((req, res) => {
    // console.log(req);

  const todoList = [
    {
      id: 1,
      task: "Complete React assignment",
      completed: false,
      dueDate: "2025-02-25",
    },
    {
      id: 2,
      task: "Review Redux concepts",
      completed: false,
      dueDate: "2025-02-26",
    },
    {
      id: 3,
      task: "Record video for JavaScript tutorial",
      completed: false,
      dueDate: "2025-02-27",
    },
    {
      id: 4,
      task: "Update GitHub repository",
      completed: false,
      dueDate: "2025-02-28",
    },
    {
      id: 5,
      task: "Write LinkedIn post about React project",
      completed: false,
      dueDate: "2025-02-29",
    },
  ];

  res.writeHead(200, {
    "content-type": "json",
  });


  if(req.url === '/lists')
  {
    res.end(JSON.stringify(todoList));
  }
  else if(req.url === '/days')
  {
    res.end(JSON.stringify([
        {
        id: 1,
        day: 'Monday'
        },
        {
            id: 2,
        day: 'Tuesday'
        },
        {
            id: 3,
        day: 'Wednesday'
        },
        {
            id: 4,
        day: 'Thursday'
        },
        {
            id: 5,
        day: 'Friday'
        },
        {
            id: 6,
        day: 'Saturday'
        },
        {
            id: 7,
        day: 'Sunday'
        }
    ]));
  }

});


server.listen(5000, "0.0.0.0", () => {
  console.log("server is up and running at port 5000");
});

