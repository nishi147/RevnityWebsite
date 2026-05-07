const API_URL = import.meta.env.VITE_API_URL || '/api';

const handleResponse = async (res: Response) => {
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'API Error');
    return data;
  } else {
    const text = await res.text();
    if (!res.ok) throw new Error(`Server Error (${res.status}): ${text.slice(0, 100)}`);
    return text;
  }
};

export const blogApi = {
  getPosts: async () => {
    const res = await fetch(`${API_URL}/posts`);
    const data = await handleResponse(res);
    return data.map((p: any) => ({ ...p, id: p._id }));
  },

  createPost: async (post: any) => {
    const res = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const data = await handleResponse(res);
    return { ...data, id: data._id };
  },

  deletePost: async (id: string) => {
    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    await handleResponse(res);
    return true;
  },

  getPostById: async (id: string) => {
    const res = await fetch(`${API_URL}/posts/${id}`);
    const data = await handleResponse(res);
    return { ...data, id: data._id };
  },

  getPostBySlug: async (slug: string) => {
    const res = await fetch(`${API_URL}/posts/slug/${slug}`);
    const data = await handleResponse(res);
    return { ...data, id: data._id };
  },

  updatePost: async (id: string, post: any) => {
    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const data = await handleResponse(res);
    return { ...data, id: data._id };
  },
  
  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    });
    
    return await handleResponse(res);
  }
};
