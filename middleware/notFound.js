function notFound(req, res) {
  res.status(404).render("404", {
    title: "404",
    message: "Страница не найдена"
  });
}

module.exports = notFound;
