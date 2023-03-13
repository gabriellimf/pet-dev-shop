import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('pages/page');
};

export const dogs = (req: Request, res: Response) => {
    res.render('dogs');
};

export const cats = (req: Request, res: Response) => {
    res.render('cats');
};

export const fishes = (req: Request, res: Response) => {
    res.render('fishes');
};