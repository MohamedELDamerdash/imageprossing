import  express, { Request, Response, Router }  from "express";
import rz from './api/resizeimg'

const routes =Router();

routes.get('/', (req : Request, res :Response) => {
    res.send('hello');
});
routes.use('/resizeimg', rz);

export default routes;