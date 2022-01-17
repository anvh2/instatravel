import jwtDecode from 'jwt-decode';

export const verifyToken = token => {
  if (!token) {
    return false;
  }
  try {
    const decoded = jwtDecode(token);
    if (!decoded || !decoded.exp) {
      return false;
    }
    const { exp } = decoded;
    if (Date.now() > exp * 1000) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};
