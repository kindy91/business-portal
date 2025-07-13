import { Request, Response } from "express";
import { userService } from "../services/userService";

export const getAll = (req: Request, res: Response) =>
  res.json(userService.getAll());

export const getById = (req: Request, res: Response) => {
  const user = userService.getById(req.params.id);
  user ? res.json(user) : res.status(404).send("Not found");
};

export const create = (req: Request, res: Response) =>
  res.json(userService.create(req.body));

export const update = (req: Request, res: Response) => {
  const user = userService.update(req.params.id, req.body);
  user ? res.json(user) : res.status(404).send("Not found");
};

export const deleteUser = (req: Request, res: Response) => {
  userService.delete(req.params.id);
  res.sendStatus(204);
};

export const deleteAll = (req: Request, res: Response) => {
  userService.deleteAll();
  res.sendStatus(204);
};
