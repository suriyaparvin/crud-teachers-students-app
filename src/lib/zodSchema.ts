import z from "zod";

export const teacherFormSchema = z.object({
  name: z.string().min(5, { error: "min 5" }),
  subject: z.string().min(4, { error: "Subject Required" }),
});

export type TeacherFormType = z.infer<typeof teacherFormSchema>;
