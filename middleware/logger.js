const { RequestLog } = require("../models");

function logger(req, res, next) {
  const requestTime = new Date();

  console.log(`[${requestTime.toLocaleString()}] ${req.method} ${req.originalUrl}`);

  res.on("finish", async () => {
    let event = "HTTP request";

    if (res.statusCode === 404) {
      event = "404 Not Found";
    } else if (res.statusCode >= 500) {
      event = "Server error";
    }

    try {
      await RequestLog.create({
        time: requestTime,
        event,
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode
      });
    } catch (error) {
      console.error("Failed to save request log:", error.message);
    }
  });

  next();
}

module.exports = logger;
