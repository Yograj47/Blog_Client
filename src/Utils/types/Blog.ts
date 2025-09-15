import { z } from 'zod'

export const blogSchema = z.object({
    title: z.string().min(5, 'Title must be at least 5 characters'),

    coverImage: z
        .object({
            imageUrl: z.string().url(),
            public_id: z.string(),
        })
        .nullable()
        .refine(val => val !== null, { message: 'Cover Image is required' }),

    tags: z.array(z.string()).max(5, 'Max 5 tags allowed'),

    category: z.string().min(1, 'Category is required'),

    content: z.object({
        contentJson: z
            .any()
            .refine(val => val?.content?.length > 0, { message: 'Content is required' }),
        contentHtml: z.string(),
    }),
})

export type BlogFormData = z.infer<typeof blogSchema>

export interface Blog {
    _id: string;
    title: string;
    author: string;
    tags: string[];
    category: string;
    content: {
        contentJson: any;
        contentHtml: string;
    };
    coverImage?: {
        imageUrl: string;
        public_id: string;
    };
    status: "draft" | "published";
    createdAt: string;
    updatedAt: string;
}
