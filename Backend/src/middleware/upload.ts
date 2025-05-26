// // middleware/upload.ts
// import multer from 'multer';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import { cloudinary } from '../utils/cloudinary';

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: async (req, file) => ({
//     folder: 'profilePics',
//     allowed_formats: ['jpg', 'jpeg', 'png'],
//     transformation: [{ width: 500, height: 500, crop: 'limit' }]
//   }),
// });

// const upload = multer({ storage });

// export default upload;
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinary } from '../utils/cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folder = 'uploads';
    let allowed_formats: string[] = [];

    if (file.mimetype.startsWith('image/')) {
      folder = 'images';
      allowed_formats = ['jpg', 'jpeg', 'png'];
    } else if (file.mimetype.startsWith('video/')) {
      folder = 'videos';
      allowed_formats = ['mp4', 'mov', 'avi'];
    } else {
      folder = 'documents';
      allowed_formats = ['pdf', 'doc', 'docx', 'txt', 'zip', 'rar'];
    }

    return {
      folder,
      resource_type: 'auto', // Crucial to support all file types
      allowed_formats,
    };
  },
});

const upload = multer({ storage });

export default upload;
