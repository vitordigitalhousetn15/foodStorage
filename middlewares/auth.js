function auth(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/auth");
  }

  return next();
}

function validateCredentials(req, res, next) {
  const credentials = req.body;
  if (credentials.login.trim() === "" || credentials.password.trim() === "") {
    return res.redirect("/auth?invalidCredentials=true");
  }
  next();
}

function validateRole(requireRole) {
  return function (req, res, next) {
    if (req.session.user === undefined) {
      return res.redirect("/auth");
    }

    if (!req.session.user.role.includes(requireRole)) {
      return res.redirect("/auth");
    }

    return next();
  };
}

module.exports = {
  auth: auth,
  validateCredentials: validateCredentials,
  validateRole: validateRole,
};
