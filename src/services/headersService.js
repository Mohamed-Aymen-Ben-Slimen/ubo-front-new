export const headers = {
  'Content-Type': 'application/json'
};

export const headersWithToken = {
  'Content-Type': 'application/json',
  'Authentication': `Bearer ${localStorage.getItem('token')}`
};
