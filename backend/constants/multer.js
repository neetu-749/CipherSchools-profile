// import multer from "multer";
// import path from 'path';

// const profileStorage = multer.diskStorage({
//   destination: "profile",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "_" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// module.exports.profileUpload = multer({
//   storage: profileStorage,
//   limits: {
//     fileSize: 100000000,
//   },
//   fileFilter(req, file, cb) {
//     cb(undefined, true);
//   },
// });