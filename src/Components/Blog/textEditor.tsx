import { useEffect } from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { createLowlight, all } from 'lowlight'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import {
    Bold,
    CodeXml,
    Heading1,
    Heading2,
    Heading3,
    Italic,
    Link2,
    ListIcon,
    ListOrdered,
    Redo2,
    Strikethrough,
    Underline as UnderlineIcon,
    Undo2,
} from 'lucide-react'
import { Button, Tooltip, Box } from '@mui/material'

interface TipTapEditorProps {
    content?: any
    onChange?: (data: { json: any; html: string }) => void
}


// Setup syntax highlighting
const lowlight = createLowlight(all)
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('javascript', javascript)
lowlight.register('typescript', typescript)

const extensions = [
    StarterKit.configure({ codeBlock: false }),
    Underline,
    Strike,
    Link.configure({ openOnClick: false }),
    // CustomImage.configure({ allowBase64: false }),
    CodeBlockLowlight.configure({ lowlight }),
    Placeholder.configure({ placeholder: 'Write your amazing blog content here...' }),
]

// Toolbar button component
function ToolbarButton({ onClick, icon, active = false, title, disabled }: {
    onClick: () => void
    icon: React.ReactNode
    active?: boolean
    title?: string
    disabled?: boolean
}) {
    return (
        <Tooltip title={title || ''} arrow>
            <Button
                onClick={onClick}
                disabled={disabled}
                aria-label={title}
                sx={{
                    minWidth: 0,
                    p: 1,
                    borderRadius: 1,
                    color: active ? 'primary.main' : 'text.primary',
                    bgcolor: active ? 'action.selected' : 'transparent',
                    '&:hover': { bgcolor: active ? 'action.selected' : 'action.hover' },
                    transition: 'background-color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                }}
            >
                {icon}
            </Button>
        </Tooltip>
    )
}

// Toolbar for editor
function MenuBar({ editor }: { editor: Editor }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                px: 1,
                py: 0.5,
                borderBottom: 1,
                borderColor: 'divider',
                bgcolor: 'transparent',
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
                boxShadow: 1,
            }}
        >
            <ToolbarButton
                title="Bold"
                onClick={() => editor.chain().focus().toggleBold().run()}
                icon={<Bold size={18} />}
                active={editor.isActive('bold')}
            />
            <ToolbarButton
                title="Italic"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                icon={<Italic size={18} />}
                active={editor.isActive('italic')}
            />
            <ToolbarButton
                title="Underline"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                icon={<UnderlineIcon size={18} />}
                active={editor.isActive('underline')}
            />
            <ToolbarButton
                title="Strikethrough"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                icon={<Strikethrough size={18} />}
                active={editor.isActive('strike')}
            />
            <ToolbarButton
                title="Heading 1"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                icon={<Heading1 size={18} />}
                active={editor.isActive('heading', { level: 1 })}
            />
            <ToolbarButton
                title="Heading 2"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                icon={<Heading2 size={18} />}
                active={editor.isActive('heading', { level: 2 })}
            />
            <ToolbarButton
                title="Heading 3"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                icon={<Heading3 size={18} />}
                active={editor.isActive('heading', { level: 3 })}
            />
            <ToolbarButton
                title="Bullet List"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                icon={<ListIcon size={18} />}
                active={editor.isActive('bulletList')}
            />
            <ToolbarButton
                title="Ordered List"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                icon={<ListOrdered size={18} />}
                active={editor.isActive('orderedList')}
            />
            <ToolbarButton
                title="Code Block"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                icon={<CodeXml size={18} />}
                active={editor.isActive('codeBlock')}
            />
            <ToolbarButton
                title="Insert Link"
                onClick={() => {
                    const url = prompt('Enter URL')
                    if (url) editor.chain().focus().setLink({ href: url, target: '_blank' }).run()
                }}
                icon={<Link2 size={18} />}
            />
            <ToolbarButton
                title="Undo"
                onClick={() => editor.chain().focus().undo().run()}
                icon={<Undo2 size={18} />}
                disabled={!editor.can().undo()}
            />
            <ToolbarButton
                title="Redo"
                onClick={() => editor.chain().focus().redo().run()}
                icon={<Redo2 size={18} />}
                disabled={!editor.can().redo()}
            />
        </Box>
    )
}

// Main editor component
export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
    const editor = useEditor({
        extensions,
        content: content && content.type === 'doc' ? content : { type: 'doc', content: [] },
        editorProps: {
            attributes: {
                class: 'editor-body prose focus:outline-none min-h-[300px] max-h-[80vh] overflow-auto p-3 rounded-b-lg border border-t-0 border-gray-300 bg-white',
            },
        },
        onUpdate: ({ editor }) => {
            const json = editor.getJSON()
            const html = editor.getHTML()
            onChange?.({ json, html })
        },
        autofocus: true,
        immediatelyRender: false,
    })

    useEffect(() => {
        if (editor && content) {
            editor.commands.setContent(content)
        }
    }, [content, editor])

    if (!editor) return null

    return (
        <Box position="relative" width="100%" borderRadius={1} boxShadow={2} bgcolor="transparent">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </Box>
    )
}
