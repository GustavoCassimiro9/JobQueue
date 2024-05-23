import RabbitmqService from "../services/rabbitmqService"


export default class RabbitmqController {
    private rabbitmqService: RabbitmqService

    constructor() {
        this.rabbitmqService = new RabbitmqService();
    }

    public sendToMessageQueue(body: { queue: string, msg: string }) {
        try {
            return this.rabbitmqService.sendToMessage(body);
        }
        catch (error) {
            throw new Error("Service error");
        }
    }
}