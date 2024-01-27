export const apiService = async (url, method, body) => {
   const token = localStorage.getItem('token');

   return await fetch(url, {
      method,
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      },
      body: body ? body : null,
   }).then(res => {
      return res.json();
   });
};
