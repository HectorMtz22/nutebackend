const jwt = require('jsonwebtoken');

function verifyToken (req, res, next) {
    let token = req.headers['x-access-token'];
    if (!token){
        return res.json({
            auth: false,
            message: 'No token provided'
        });
    }

    let decoded = jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) {
        return res.json({
            auth: false,
            message: 'Invalid Token'
        })
    } else {
        req.userId = decoded.id;
    }
    });

    /*let decoded = jwt.verify(token, process.env.SECRET, function(err, decoded) {
        console.log(decoded) // bar
        console.log(err);
        if (err) {
            token = undefined;
        }
      }); */
    
    next();
}

module.exports = verifyToken;