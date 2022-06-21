const express = require('express');
const router = express.Router();

const { getTradeByIdController, getAllTradesController, createNewTradeController, deleteTradeWithIdController, getTradeByShareTypeController, getTradeByUserIdController } = require('../controllers/trades')



router.get('/', getAllTradesController)
router.post('/', createNewTradeController)
router.route('/:id')
    .get(getTradeByIdController)
    .get(getTradeByShareTypeController)
    .get(getTradeByUserIdController)
    .delete(deleteTradeWithIdController)
    .put(deleteTradeWithIdController)
    .patch(deleteTradeWithIdController)
module.exports = router;
