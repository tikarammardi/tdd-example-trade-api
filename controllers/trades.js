const Trades = require('../models/trades')
const TRADE_TYPE = ["buy", "sell"]
const getTradeByIdController = async (req, res) => {
    const id = req?.params?.id;

    try {
        if (!id) {
            return res.status(400).send(`request params missing`);
        }
        const trades = await Trades.findOne({
            attributes: [
                "id",
                "type",
                "user_id",
                "symbol",
                "shares",
                "price",
                "timestamp",
            ],
            where: {
                id: id
            }
        })
        if (!trades) {
            return res.status(404).send(`ID not found`);
        }

        return res.status(200).json(trades);
    } catch (error) {

        return res.status(400).send(error?.message);
    }
}

const getAllTradesController = async (req, res) => {


    try {
        const user_id = req?.params?.user_id;
        const type = req?.params?.type;
        if (user_id && type) {
            if (!TRADE_TYPE.includes(type)) {
                return res.status(400).send(`${type} type is not allowed`);
            }
            const trades = await Trades.findAll({
                attributes: [
                    "id",
                    "type",
                    "user_id",
                    "symbol",
                    "shares",
                    "price",
                    "timestamp",
                ],
                where: {
                    user_id: user_id,
                    type: type,
                },
                order: [['id', 'ASC']]
            })
            if (!trades) {
                return res.status(404).send(`No trades found`);
            }

            return res.status(200).json(trades);

        }



        const trades = await Trades.findAll({
            attributes: [
                "id",
                "type",
                "user_id",
                "symbol",
                "shares",
                "price",
                "timestamp",
            ],
            order: [['id', 'ASC']]
        })
        if (!trades) {
            return res.status(404).send(`No trades found`);
        }

        return res.status(200).json(trades);
    } catch (error) {

        return res.status(400).send(error?.message);
    }
}

const createNewTradeController = async (req, res) => {
    const payload = req?.body;

    try {
        if (!TRADE_TYPE.includes(payload?.type)) {
            return res.status(400).send(`${payload?.type} type is not allowed`);
        }
        if (1 > payload?.shares || payload?.shares > 100) {
            return res.status(400).send(`share value should be between [1,100]`);
        }
        await Trades.create(payload)

        return res.status(200).json(payload);
    } catch (error) {

        return res.status(400).send(error?.message);
    }
}



const deleteTradeWithIdController = async (req, res) => {

    try {
        return res.status(405).send('not allowed')
    } catch (error) {

        return res.status(400).send(error?.message);
    }
}

const getTradeByShareTypeController = async (req, res) => {
    const type = req?.params?.type;

    try {
        if (!type || !TRADE_TYPE.includes(payload?.type)) {
            return res.status(400).send(`request param missing`);
        }
        const trades = await Trades.findAll({
            attributes: [
                "id",
                "type",
                "user_id",
                "symbol",
                "shares",
                "price",
                "timestamp",
            ],
            where: {
                type: type
            },
            order: ['id', 'ASC']
        })
        if (!trades) {
            return res.status(404).send(`not found`);
        }

        return res.status(200).json(trades);
    } catch (error) {

        return res.status(400).send(error?.message);
    }
}

const getTradeByUserIdController = async (req, res) => {
    const user_id = req?.params?.user_id;

    try {
        if (!user_id) {
            return res.status(400).send(` user_id missing`);
        }
        const trades = await Trades.findAll({
            attributes: [
                "id",
                "type",
                "user_id",
                "symbol",
                "shares",
                "price",
                "timestamp",
            ],
            where: {
                user_id: user_id
            },
            order: ['id', 'ASC']
        })
        if (!trades) {
            return res.status(404).send(`not found`);
        }

        return res.status(200).json(trades);
    } catch (error) {

        return res.status(400).send(error?.message);
    }
}
module.exports = {
    getTradeByIdController,
    getAllTradesController,
    createNewTradeController,
    deleteTradeWithIdController,
    getTradeByShareTypeController,
    getTradeByUserIdController
}