const express = require('express');
const controller = require('../../controllers/userController');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.delete('/', controller.deleteAll);

module.exports = router;
