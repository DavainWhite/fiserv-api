const express = require('express');

const router = express.Router();

// Ive included 0 error handling because it was not asked for
// Would love to but this seems to be a test of basic skills

router.post('/:version/parse', (req, res) => {
  const getVersionData = getData.bind(req.body.data);

  // These regular expressions are assuming you are only using 0s as a delimiter and not
  // a index of the user id or smt.
  switch(req.params.version){
    case 'v1':
      res.json(getVersionData('([a-z]+0+)([a-z]+0+)([0-9]+)'));
      break;
    case 'v2':
      res.json(getVersionData('([a-z]+)0+([a-z]+)0+([0-9]+)'));
      break;
  }
});

const getData = function(string) {
  const regex = new RegExp(string, 'i');

  // First index in the returned exec function is the full string
  // so used unserscore as a throw awy variable.
  const [_, firstName, lastName, clientId] = regex.exec(this);

  return {
    statusCode: 200,
    data: {
      firstName,
      lastName,
      clientId
    }
  }
}

module.exports = router;
