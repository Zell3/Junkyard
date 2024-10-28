import { Router, Request, Response } from "express";

import * as titlesModel from "../models/titles";

const router = Router();

// GET /titles
router.get("/titles", async (req: Request, res: Response) => {
  let [rows] = await titlesModel.getAllTitles();
  res.status(200).json(rows);
});

// GET /title/:id
router.get('/title/:id', async (req: Request, res: Response) => {
  const tit_id = parseInt(req.params.id, 10);
  let [rows] = await titlesModel.getTitleById(tit_id);
  res.status(200).json(rows);
});

// POST /title
router.post('/title', async (req: Request, res: Response) => {
  const { tit_name, tit_is_active } = req.body as { tit_name: string; tit_is_active: number };
  await titlesModel.createTitle(tit_name, tit_is_active);
  res.status(201).json({ tit_name, tit_is_active });
});

// PUT /title/:id
router.put('/title/:id', async (req: Request, res: Response) => {
  const tit_id = parseInt(req.params.id, 10);
  const { tit_name, tit_is_active } = req.body as { tit_name: string; tit_is_active: number };
  await titlesModel.updateTitle(tit_id, tit_name, tit_is_active);
  res.status(200).json({ tit_id, tit_name, tit_is_active });
});

// DELETE /title/:id
router.delete('/title/:id', async (req: Request, res: Response) => {
  const tit_id = parseInt(req.params.id, 10);
  await titlesModel.deleteTitle(tit_id);
  res.status(204).send();
});

export default router;
