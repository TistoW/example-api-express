import express, {NextFunction, Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        message: "Success running Zenenta 4005"
    });
});

app.listen(4005, () => {
    console.log((`Selamat datang di zenenta running on port 4005`))
});