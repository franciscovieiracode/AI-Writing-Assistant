// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('authToken');
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication API
export const authAPI = {
  login: async (credentials) => {
    const data = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (data.token) {
      localStorage.setItem('authToken', data.token);
    }
    
    return data;
  },

  register: async (userData) => {
    const data = await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (data.token) {
      localStorage.setItem('authToken', data.token);
    }
    
    return data;
  },

  logout: () => {
    localStorage.removeItem('authToken');
  },

  getCurrentUser: async () => {
    return await apiCall('/auth/me');
  },
};

// Text Processing API
export const textAPI = {
  rewrite: async (text, style) => {
    return await apiCall('/text/rewrite', {
      method: 'POST',
      body: JSON.stringify({ text, style }),
    });
  },

  getHistory: async (page = 0, size = 10) => {
    return await apiCall(`/text/history?page=${page}&size=${size}`);
  },

  saveRewrite: async (originalText, rewrittenText, style) => {
    return await apiCall('/text/save', {
      method: 'POST',
      body: JSON.stringify({ originalText, rewrittenText, style }),
    });
  },

  deleteHistory: async (id) => {
    return await apiCall(`/text/history/${id}`, {
      method: 'DELETE',
    });
  },
};

// User Statistics API
export const statsAPI = {
  getUserStats: async () => {
    return await apiCall('/stats/user');
  },

  getUsageStats: async (startDate, endDate) => {
    return await apiCall(`/stats/usage?start=${startDate}&end=${endDate}`);
  },
};

export default {
  auth: authAPI,
  text: textAPI,
  stats: statsAPI,
};