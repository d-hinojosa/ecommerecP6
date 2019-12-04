require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const usersRoutes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.set("useCreateIndex", true);
let uri;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI; // connection string for Atlas here
} else {
  uri = process.env.ATLAS_URI; // connection string for localhost mongo here
}
// connection to database
mongoose.connect(
	uri,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	err => {
		console.log(err || "Connected to MongoDB");
	}
);
  app.use((req, res, next) => {
	// The 'x-forwarded-proto' check is for Heroku
	if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === "production") {
	  return res.redirect('https://' + req.get('host') + req.url);
	}
	next();
  })

app.use(express.static(`${__dirname}/Client/build`));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRouter = require('./routes/Products')
app.use('/products', productRouter)
app.get("/api", (req, res) => {
  res.json({ message: "API root" });
});
app.use("/api/users", usersRoutes);
app.use("*", (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`);
  });
app.listen(PORT, err => {
  console.log(err || `Server running on port ${PORT}.`);
});
