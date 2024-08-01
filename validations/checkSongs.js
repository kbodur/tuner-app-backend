const checkName = (req, res, next) => {
    if (req.body.name) {
      return next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };

const checkDescription = (req, res, next) => {
    if (req.body.description) {
      next();
    } else {
      res.status(400).json({ error: "Description is required" });
    }
  };
  
  module.exports = {  checkName, checkDescription };