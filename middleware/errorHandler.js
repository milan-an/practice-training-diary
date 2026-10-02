function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).render("500", {
    title: "Ошибка сервера"
  });
}

module.exports = errorHandler;
