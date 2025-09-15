const apiImageKey = "http://localhost:5000/api/v1/images"

export const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData()
    formData.append('image', file)

    const res = await fetch(`${apiImageKey}/upload`, {
        method: "POST",
        body: formData,
    })

    if (!res.ok) throw new Error("Upload failed")
    return await res.json() // return { secure_url, public_id }
}

export const deleteImageFromCloudinary = async (public_id: string) => {
    const res = await fetch(`${apiImageKey}/delete/${public_id}`, {
        method: "DELETE",
    })

    if (!res.ok) throw new Error("Delete failed")
    return await res.json()
}
