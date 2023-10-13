
// A function to log in the user and store authentication status in local storage
export function login(username: string, password: string): boolean {
    if (username === 'exampleUser' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }
  
  // A function to log out the user and remove the authentication status from local storage
  export function logout(): void {
    localStorage.removeItem('isAuthenticated');
  }
  
  // A function to check if the user is authenticated
  export function isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
  