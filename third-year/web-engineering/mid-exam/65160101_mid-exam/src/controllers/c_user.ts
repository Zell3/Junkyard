import { Router, Request, Response } from "express";
import MUser from "../models/m_user";
const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  let result = {
    status: true,
    data: [await MUser.getAll()]
  };
  res.json(result);
});

// TODO
router.get("/user/:id", async (req: Request, res: Response) => {
  let id = parseInt(req.params.id, 10);
  let result = {
    status: true,
    data: [await MUser.getById(id)]
  };
  res.json(result);
});

router.post("/user", async (req: Request, res: Response) => {
  const { username, first_name, last_name, email, pfn_id } = req.body as { username: string, first_name: string, last_name: string, email: string, pfn_id: number };
  let result = {
    status: true,
    data: [await MUser.createUser(username, first_name, last_name, email, pfn_id)]
  };
  res.json(result);
});

export default router;
