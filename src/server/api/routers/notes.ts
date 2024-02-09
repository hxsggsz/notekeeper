import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const NotesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        color: z.string(),
        userId: z.string().cuid(),
        description: z.string().max(1000),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.notes.create({
        data: {
          color: input.color,
          userId: input.userId,
          description: input.description,
        },
      });
    }),

  read: protectedProcedure
    .input(z.object({ userId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const notes = await ctx.db.notes.findMany({
        where: {
          userId: input.userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return notes;
    }),

  update: protectedProcedure
    .input(z.object({ noteId: z.string().cuid(), description: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.notes.update({
        data: {
          description: input.description,
        },
        where: {
          id: input.noteId,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ noteId: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.notes.delete({
        where: {
          id: input.noteId,
        },
      });
    }),
});
