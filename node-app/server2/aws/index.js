import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

// multer: 파일 저장소 역할을 함.
// npm i aws-sdk multer multer-s3

const accessKeyId = "";
const secretAccessKey = "";
const s3 = new AWS.S3({ accessKeyId, secretAccessKey });
const bucket = "nepp-insta";

export const upload = multer({
  storage: multerS3({
    s3,
    bucket,
    acl: "public-read",
    metaData: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `images/${Date.now().toString()}/${file.originalname}`);
    },
  }),
});
