import {Request, Response, Router} from "express"
import {blogsCollection, postsCollection} from "../db/db";
import {HTTP_STATUSES} from "../utils";

export const testingRouter = Router({})

testingRouter.delete('/all-data',
    async (req: Request, res: Response) => {
    await blogsCollection.deleteMany({})
    await postsCollection.deleteMany({})
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})