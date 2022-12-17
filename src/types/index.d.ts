/* eslint-disable prettier/prettier */
export {};

declare global {
  namespace Express {
    interface Request {
      user: number;
    }
  }
}
