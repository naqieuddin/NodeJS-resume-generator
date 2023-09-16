function index(req, res) {
  res.render("index");
}

function resume(req, res) {
  const data = {
    name: req.body.name,
    location: req.body.location,
    occupation: req.body.occupation,
    education: req.body.education,
    experience: req.body.experience,
  };

  res.render("resume", data);
}

const resumeController = { index, resume };

module.exports = resumeController;
