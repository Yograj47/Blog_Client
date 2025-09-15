'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
    Box,
    Button,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    IconButton,
    Paper,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { X } from 'lucide-react'
import axios from 'axios'
import { BlogFormData, blogSchema } from '@/Utils/types/Blog'
import { deleteImageFromCloudinary, uploadImageToCloudinary } from '@/Utils/Methods/HandleImage'
import TipTapEditor from '@/Components/Blog/textEditor'
import UploadingScreen from '@/Utils/UI/UploadingScreen'

const categories = ['Food', 'Travel', 'Tech', 'Lifestyle', 'News']

type IEdit = { id?: string }

export const BlogForm = ({ id }: IEdit) => {
    const apiBlogKey = "http://localhost:5000/api/v1/blogs"

    const [isUploading, setIsUploading] = useState(false)
    const [coverPreview, setCoverPreview] = useState<string | null>(null)
    const [imagePublicId, setImagePublicId] = useState<string | null>(null)
    const [tagInput, setTagInput] = useState('')

    const {
        setValue,
        getValues,
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
        setError,
        clearErrors,
        reset,
    } = useForm<BlogFormData>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: '',
            tags: [],
            category: '',
            content: { contentJson: { type: 'doc', content: [] }, contentHtml: '' },
            coverImage: null,
        },
    })

    const tags = watch('tags') || []

    // Cover Image Handlers
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            setIsUploading(true)
            const { secure_url, public_id } = await uploadImageToCloudinary(file)
            setCoverPreview(secure_url)
            setImagePublicId(public_id)
            setValue('coverImage', { imageUrl: secure_url, public_id })
            clearErrors('coverImage')
        } catch (err) {
            console.error('Image upload error:', err)
        } finally {
            e.target.value = ''
            setIsUploading(false)
        }
    }

    const handleImageRemove = async () => {
        if (!imagePublicId) return
        try {
            await deleteImageFromCloudinary(imagePublicId)
            setCoverPreview(null)
            setImagePublicId(null)
            setValue('coverImage', null)
        } catch (err) {
            console.error('Image delete error:', err)
        }
    }

    // Tags
    const addTag = () => {
        const trimmed = tagInput.trim()
        const currentTags = getValues('tags')
        if (!trimmed || currentTags.includes(trimmed)) return
        if (currentTags.length >= 5) {
            setError('tags', { type: 'manual', message: 'Max 5 tags allowed' })
            return
        }
        setValue('tags', [...currentTags, trimmed])
        clearErrors('tags')
        setTagInput('')
    }

    const removeTag = (tagToRemove: string) => {
        setValue('tags', tags.filter((tag) => tag !== tagToRemove))
    }

    // Fetch blog for edit
    useEffect(() => {
        if (!id) return
        const fetchBlog = async () => {
            try {
                // Fetch blog and reset form
            } catch (err) {
                console.error('Error fetching blog:', err)
            }
        }
        fetchBlog()
    }, [id, reset, apiBlogKey])

    // Submit
    const onSubmit = async (data: BlogFormData) => {
        const formData = { ...data, author: 'Admin', status: 'published' }
        try {
            setIsUploading(true)
            if (id) await axios.put(`${apiBlogKey}/${id}`, formData)
            else await axios.post(`${apiBlogKey}/create`, formData)
        } catch (err) {
            console.error('Error submitting form:', err)
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <>
            <Box display="flex" justifyContent="center" p={3}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        width: '100%',
                        maxWidth: 800,
                        borderRadius: 3,
                        overflowY: 'auto',
                        maxHeight: '90vh',
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Header */}
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                            <Typography variant="h5" fontWeight="bold">{id ? 'Edit Post' : 'Create Post'}</Typography>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', sm: 'auto' }}>
                                <Button variant="outlined" fullWidth>Save Draft</Button>
                                <Button variant="contained" color="primary" type="submit" fullWidth>Publish</Button>
                            </Stack>
                        </Box>

                        {/* Title */}
                        <TextField
                            label="Title"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            variant="standard"
                            {...register('title')}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                            sx={{ mb: 3, input: { fontSize: '1.3rem' } }}
                        />

                        {/* Cover Image */}
                        <Box mb={3}>
                            <Button component="label" variant="outlined" sx={{ mb: 2 }}>
                                Upload Cover Image
                                <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                            </Button>
                            {coverPreview && (
                                <Box position="relative" width="100%" maxWidth={400} borderRadius={2} overflow="hidden" border="1px solid #ccc">
                                    <img src={coverPreview} alt="Cover Preview" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <IconButton
                                        size="small"
                                        color="error"
                                        onClick={handleImageRemove}
                                        sx={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                            bgcolor: 'rgba(255,255,255,.7)',
                                            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                                        }}
                                    >
                                        <X size={20} />
                                    </IconButton>
                                </Box>
                            )}
                        </Box>

                        {/* Category */}
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <FormControl fullWidth error={!!errors.category} sx={{ mb: 3 }}>
                                    <InputLabel>Category</InputLabel>
                                    <Select {...field} label="Category">
                                        {categories.map((cat) => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
                                    </Select>
                                    {errors.category && <Typography variant="caption" color="error">{errors.category.message}</Typography>}
                                </FormControl>
                            )}
                        />

                        {/* Tags */}
                        <Box mb={3}>
                            <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
                                <TextField
                                    variant="outlined"
                                    placeholder="Add a tag and press Enter"
                                    size="small"
                                    value={tagInput}
                                    onChange={e => setTagInput(e.target.value)}
                                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addTag() } }}
                                    sx={{ flexGrow: 1, minWidth: 200 }}
                                    error={!!errors.tags}
                                    helperText={errors.tags?.message}
                                />
                                <Button variant="contained" size="small" onClick={addTag} sx={{ whiteSpace: 'nowrap' }}>Add Tag</Button>
                            </Stack>
                            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap" gap={1}>
                                {tags.map(tag => <Chip key={tag} label={tag} onDelete={() => removeTag(tag)} />)}
                            </Stack>
                        </Box>

                        {/* Content */}
                        <Controller
                            name="content"
                            control={control}
                            render={({ field }) => (
                                <Box sx={{ border: errors.content?.contentJson ? '1px solid red' : '1px solid #ccc', borderRadius: 2, p: 2, minHeight: 300 }}>
                                    <TipTapEditor
                                        content={field.value?.contentJson ?? { type: 'doc', content: [] }}
                                        onChange={(data) => field.onChange({ contentJson: data.json, contentHtml: data.html })}
                                    />
                                    {errors.content?.contentJson && <Typography variant="caption" color="error" mt={0.5}>{!!errors.content?.contentJson?.message}</Typography>}
                                </Box>
                            )}
                        />
                    </form>
                </Paper>
            </Box>

            <UploadingScreen visible={isUploading} />
        </>
    )
}
