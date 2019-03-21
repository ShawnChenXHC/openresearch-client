const MakeUsers = (app) => {
  var list = [{
    id: 0,
    name: "Jamie Hopkins",
    email: "jamie.hopp@gmail.com",
  }, {
    id: 1,
    name: 'Bruce Randall',
    email: 'bruce.randal86@hotmail.com'
  }];

  app.get('/users', (_req, res) => {
    res.json(list);
    console.log('Sending list of users')
  });

  app.get('/user/:id', (req, res) => {
    res.json(list[req.params.id]);
    console.log(`Sending info for user ${req.params.id}`);
  })

  app.get
}

module.exports = MakeUsers;
