import dotenv from "dotenv";
dotenv.config();

// 상수 선언은 전부 대문자에 스네이크(언더바) 표기법을 사용 한다.
// export const JWT_SECRET_KEY = "secret키입니다~!@#";
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
