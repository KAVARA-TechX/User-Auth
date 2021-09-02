exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.retailBoard = (req, res) => {
    res.status(200).send("retail Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.B2BBoard = (req, res) => {
    res.status(200).send("Bussiness-to-Bussiness Content.");
  };