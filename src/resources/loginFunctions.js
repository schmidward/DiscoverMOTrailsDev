export async function login(username, password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (!response.ok) {
      throw new Error('Failed to login');
    }
  
    const data = await response.json();
    return data.token;
  }
  
  export async function getProtectedResource(url) {
    const token = localStorage.getItem('token');
  
    if (!token) {
      throw new Error('No token available');
    }
  
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
  
    const response = await fetch(url, options);
  
    if (!response.ok) {
      throw new Error('Failed to fetch protected resource');
    }
  
    const data = await response.json();
    return data;
  }
  