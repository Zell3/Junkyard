import { Router, Request, Response } from "express";
import MPrefixName from "../models/m_prefix_name";
const router = Router();

router.get("/prefixes", async (req: Request, res: Response) => {
  let result = {
    status: true,
    data: [await MPrefixName.getAll()]
  };
  res.json(result);
});

// TODO
router.get("/prefix/:id", async (req: Request, res: Response) => {
  let id = parseInt(req.params.id, 10);
  let result = {
    status: true,
    data: [await MPrefixName.getById(id)]
  };
  res.json(result);
});

router.post("/prefix", async (req: Request, res: Response) => {
  const { name } = req.body as { name: string; };
  let result = {
    status: true,
    data: [await MPrefixName.createPrefix(name)]
  };
  res.json(result);
});

router.put("/prefix", async (req: Request, res: Response) => {
  const { id, name } = req.body as { id: number, name: string; };
  let result = {
    status: true,
    data: [await MPrefixName.updatePrefix(id, name)]
  };
  res.json(result);
});

router.delete("/prefix", async (req: Request, res: Response) => {
  const { id } = req.body as { id: number };
  let result = {
    status: true,
    data: await MPrefixName.removePrefix(id)
  };
  res.json(result);
});

export default router;
