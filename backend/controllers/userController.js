const userService = require('../services/userService');

exports.getAll = (req, res) => res.json(userService.getAll());
exports.getById = (req, res) => {
  const user = userService.getById(req.params.id);
  user ? res.json(user) : res.status(404).send('Not found');
};
exports.create = (req, res) => res.json(userService.create(req.body));
exports.update = (req, res) => {
  const user = userService.update(req.params.id, req.body);
  user ? res.json(user) : res.status(404).send('Not found');
};
exports.delete = (req, res) => {
  userService.delete(req.params.id);
  res.sendStatus(204);
};
exports.deleteAll = (req, res) => {
  userService.deleteAll();
  res.sendStatus(204);
};
