const User = require('../models/user');
const mockUsers = require('../mock/users');
let users = mockUsers.map(u => new User(u)); // In-memory store

module.exports = {
  getAll: (page = 1, pageSize = 5) => {
    page = Number(page);
    pageSize = Number(pageSize);
    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(pageSize) || pageSize < 1) pageSize = 5;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    console.log(`Fetching users: page=${page}, pageSize=${pageSize}, start=${start}, end=${end}`);

    return {
      entries: users.slice(start, end),
      total: users.length,
      pageSize
    };
  },
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
