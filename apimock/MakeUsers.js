const MakeUsers = (app) => {
  app.get('/users', (_req, res) => {
    var list = [{
      name: "Jamie Hopkins",
      email: "jamie.hopp@gmail.com",
    }, {
      name: 'Bruce Randall',
      email: 'bruce.randal86@hotmail.com'
    }];

    res.json(list);
    console.log('Sending list of users')
  })
}

module.exports = MakeUsers;
