export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

export interface User {
  id: number;
  name: string;
  email: string;
}
