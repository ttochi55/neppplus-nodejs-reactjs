import conn from "../db/index.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY as secretKey } from "../configs/index.js";
import { verifyToken } from "../helper/user.js";

export const getPostMain = async (req, res) => {
  // const token = req.headers.authorization;
  // let userId;

  // try {
  //   const jwtResult = jwt.verify(token, secretKey);
  //   userId = jwtResult.userId;
  // } catch (e) {
  //   console.log(e);
  //   return res.json({ success: false });
  // }

  const token = req.headers.authorization;
  const jwtResult = verifyToken(token);

  if (!jwtResult) {
    return res.json({ success: false });
  }

  const { userId } = jwtResult;

  const query = `
    SELECT post.*, user.user_name, user.profile_image,
    GROUP_CONCAT(image.url) AS imageList
    FROM post
    JOIN image ON image.post_id = post.id
    JOIN user ON user.id = post.user_id
    WHERE post.user_id = ${userId}
    GROUP BY post.id
    ORDER BY post.created_at DESC
  `;

  const [rows] = await conn.query(query);
  const postList = rows.map((post) => {
    const imageList = post.imageList.split(",");
    return { ...post, imageList };
  });
  res.json({ success: true, postList });
};

export const addPost = async (req, res) => {
  // 1. 토큰으로 누가 올린 포스트인지 확인
  const token = req.headers.authorization;
  let userId;

  try {
    const jwtResult = jwt.verify(token, secretKey);
    userId = jwtResult.userId;
  } catch (e) {
    console.log(e);
    return res.json({ success: false });
  }

  // 2. content 와 userId로 포스트 생성
  const { content, imageList } = req.body;
  const query1 = `
    INSERT INTO post(user_id, content) VALUES(${userId}, '${content}');
  `;
  const [newPost] = await conn.query(query1);

  // 3. 2에서 생성한 post_id를 담아서 imageList에 온 이미지들을 생성
  const postId = newPost.insertId;
  const promiseList = imageList.map((url) => {
    const query2 = `
      INSERT INTO image(post_id, url) VALUES(${postId}, '${url}');
    `;
    return conn.query(query2);
  });
  await Promise.all(promiseList);

  res.json({ success: true });
};

export const getPost = async (req, res) => {
  const { userName } = req.query;
  console.log(userName);

  const query = `
  SELECT post.id, GROUP_CONCAT(image.url) AS imageList
  FROM post
  JOIN image ON image.post_id = post.id
  JOIN user ON user.id = post.user_id
  WHERE user.user_name = '${userName}'
  GROUP BY post.id
  ORDER BY post.created_at DESC;
  `;
  const [rows] = await conn.query(query);
  const postList = rows.map((post) => {
    const imageList = post.imageList.split(",");
    return { ...post, imageList };
  });

  res.json({ success: true, postList });
};
