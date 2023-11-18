import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.post(`/signup`, async (req, res) => {
  const { email, address } = req.body;

  const result = await prisma.user.create({
    data: {
      email,
      address,
    },
  });
  res.json(result);
});

app.post(`/key`, async (req, res) => {
  const {
    hash,
    title,
    startDate,
    endDate,
    description,
    contactLink,
    conditionals,
    address,
  } = req.body;
  console.log(req.body);
  const result = await prisma.key.create({
    data: {
      title,
      hash,
      contactLink,
      description,
      endDate,
      startDate,
      // @ts-ignore
      address,
      keyRules: {
        create: conditionals.map((conditional: any) => ({
          name: conditional.id,
        })),
      },
    },
  });
  const user = await prisma.user.findFirst({
    where: {
      address,
    },
  });
  if (!user) {
    await prisma.user.create({
      data: {
        address,
        email: contactLink,
      },
    });
  }
  res.json(result);
});

app.get("/events/:id", async (req, res) => {
  const { id } = req.params;

  const event = await prisma.key.findFirst({
    where: { id: +id },
    include: {
      keyRules: true,
    },
  });
  return res.status(200).json({ event });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
