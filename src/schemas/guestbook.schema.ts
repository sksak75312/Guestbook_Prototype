import z from 'zod';

const guestbookPostSchema = z.object({
  userId: z.string('The userId is required input'),
  message: z.string('The message is required input').min(1),
  publishedDate: z.string('The published is required input')
})

export { guestbookPostSchema };