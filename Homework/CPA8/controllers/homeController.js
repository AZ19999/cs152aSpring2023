module.exports = {
  index: (req, res) => {
    res.render("index.ejs");
  },
  chat: (req, res) => {
    res.render("chat");
  },
  about: (req, res) => {
    res.render("about");
  },
};
