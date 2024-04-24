import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key';

interface JwtPayload {
  userId: string;
}

export function generateToken(userId: string): string {
  const payload: JwtPayload = { userId };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    const payload = jwt.verify(token, secretKey) as JwtPayload;
    return payload;
  } catch (error) {
    return null;
  }
}
