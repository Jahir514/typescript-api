import { Express, Request, Response } from "express";

const routes = (app: Express) => {
    app.get('/healthCheck', (req: Request, res: Response) => {
        res.status(200).json({
            msg: "Everything is okay"
        })
    })
}

export default routes