function mockAuth(req, res, next) {
  const cookieHeader = req.headers.cookie || "";

  const isAuthenticated = cookieHeader
    .split(";")
    .map(cookie => cookie.trim())
    .includes("practiceAuth=1");

  if (isAuthenticated) {
    return next();
  }

  return res.redirect("/login");
}

module.exports = mockAuth;