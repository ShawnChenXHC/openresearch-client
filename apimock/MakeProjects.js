const MakeProjects = (app) => {
  app.get('/projects', (_req, res) => {
    var list = [{
      name: "Super awesome project 1",
      description: "A super awesome project, the first one"
    }, {
      name: "Effects of depression",
      description: "Depression effects on the population"
    }];

    res.json(list);
    console.log('Sending list of projects');
  });
}

module.exports = MakeProjects;
