import { Router } from "express";
import { firstController } from "./app/controller/FirstController";
import RabbitmqServer from "./app/rabbitmq/rabbitmq-server";
import dotenv from 'dotenv';
import RabbitmqController from "./app/controller/rabbitmqController";

const router: Router = Router()
dotenv.config();

router.get("/", firstController.home);

router.post("/queue", async (req, res) => {

})

router.post("/queue/send", async (req, res) => {
    try {
        const body = req.body;
        const rabbitmqController = new RabbitmqController();
        const send = await rabbitmqController.sendToMessageQueue(body);
        res.send(send)
    }
    catch (error) {
        console.error("Error sending message to RabbitMQ:", error);
        res.status(500).send('Internal Server Error');
    }
})

export { router };