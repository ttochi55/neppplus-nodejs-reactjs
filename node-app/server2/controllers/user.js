import conn from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY as secretKey } from "../configs/index.js";
import { verifyToken } from "../helper/user.js";
// import crypto from "crypto";

// crypto is deprecated
// export const postUser = async (req, res) => {
//   const { userName, password, name } = req.body;

//   // 2가지 값을 가진 배열이 리턴되며 그중에서 첫번째 값이 조회한 결과 값이다.
//   const query = `SELECT id FROM user WHERE user_name = '${userName}'`;
//   const [rows] = await conn.query(query);

//   if (rows.length) {
//     return res.json({
//       success: false,
//       message: "중복되는 아이디가 존재합니다.",
//     });
//   }

//   const salt = crypto.randomBytes(32).toString("hex");
//   const hashedPW = crypto
//     .pbkdf2Sync(password, salt, 1, 32, "sha512")
//     .toString("hex");

//   const query2 = `
//     INSERT INTO user(user_name, password, salt, name)
//     VALUES('${userName}', '${hashedPW}', '${salt}', '${name}');
//   `;
//   await conn.query(query2);

//   res.json({ success: true });
// };

// bcrypto
export const postUser = async (req, res) => {
  const { userName, password, name } = req.body;

  const query = `SELECT id FROM user WHERE user_name = '${userName}'`;
  const [rows] = await conn.query(query);

  if (rows.length) {
    return res.json({
      success: false,
      message: "중복되는 아이디가 존재합니다.",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPW = await bcrypt.hash(password, salt);

  const query2 = `
    INSERT INTO user(user_name, password, salt, name)
    VALUES('${userName}', '${hashedPW}', '${salt}', '${name}')
  `;
  await conn.query(query2);

  res.json({ success: true });
};

export const postUserLogin = async (req, res) => {
  const { userName, password } = req.body;

  const query1 = `SELECT salt FROM user WHERE user_name = '${userName}'`;
  const [users] = await conn.query(query1);

  // 1. userName으로 db에 해당하는 유저가 있는지 찾는다.
  //    1-1. 없으면 return false
  if (users.length === 0) {
    return res.json({ success: false, message: "해당하는 유저가 없습니다." });
  }

  // 2. 있으면 해당하는 user의 salt와 받아온 password로
  //    회원가입할때와 같은 방법으로 암호화된 비밀번호를 생성한다.
  const { salt } = users[0];
  const hashedPW = await bcrypt.hash(password, salt);

  // 3. 암호화된 비밀번호와 아이디가 일치하는 유저를 찾는다.
  const query2 = `SELECT id FROM user WHERE user_name = '${userName}' AND password = '${hashedPW}'`;
  const [rows] = await conn.query(query2);

  // 4-1. 없으면 비밀번호 틀림.
  const user = rows[0];

  if (!user) {
    return res.json({ success: false, message: "비밀번호가 틀렸습니다." });
  }

  // 토큰 생성
  // 4-2. 있으면 로그인 성공. 토큰을 생성하여 클라이언트에 보내준다.
  const payload = { userId: user.id };
  const option = { expiresIn: "1h" };

  const token = jwt.sign(payload, secretKey, option);

  return res.json({ success: true, token });
};

export const getMyInfo = async (req, res) => {
  const jwtResult = verifyToken(req.headers.authorization);

  if (!jwtResult) {
    return res.json({ success: false });
  }

  const { userId } = jwtResult;

  const query = `
  SELECT id, user_name, name, memo, profile_image
  FROM user
  WHERE id = ${userId};
  `;
  const [rows] = await conn.query(query);
  const user = rows[0];

  if (!user) {
    return res.json({ success: false });
  }

  res.json({ user });
};
