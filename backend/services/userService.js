const User = require('../models/user');
const mockUsers = require('../mock/users');
let users = mockUsers.map(u => new User(u)); // In-memory store

module.exports = {
  getAll: () => users,
  getById: (id) => users.find(u => u.id === id),
  create: (data) => {
    const user = new User({ id: Date.now().toString(), ...data });
    users.push(user);
    return user;
  },
  update: (id, data) => {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...data };
    return users[idx];
  },
  delete: (id) => {
    users = users.filter(u => u.id !== id);
  },
  deleteAll: () => { users = []; }
};
