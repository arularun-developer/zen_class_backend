const portfolioRouter = require("express").Router();
const { postPortfolio} = require("../controllers/portfolio");





//posting new portfolio data

portfolioRouter.post("/student/portfolio", postPortfolio);

module.exports = portfolioRouter;