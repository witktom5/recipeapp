import { recipeRouter } from "~/server/api/routers/recipes";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  recipes: recipeRouter,
});

export type AppRouter = typeof appRouter;
