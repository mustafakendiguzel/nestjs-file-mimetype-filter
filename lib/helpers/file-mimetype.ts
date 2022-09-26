import { flatten, UnsupportedMediaTypeException } from '@nestjs/common';
import { FilePermission } from '../interface/file.permission.interface';

export function fileMimetypeFilter(filePermission:FilePermission) {
  return (
    req,
    file: Express.Multer.File,
    callback: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    const allowedFiles = filePermission.allowedFiles? filePermission.allowedFiles.some((m) => file.mimetype.includes(m)): null;
    const deniedFiles = filePermission.deniedFiles? filePermission.deniedFiles.some((m) => file.mimetype.includes(m)): null;
    if (allowedFiles) {
      callback(null, true);
    } else if (deniedFiles)
      callback(new UnsupportedMediaTypeException(`This File types are blocked: ${filePermission.deniedFiles.join(', ')}`), false);
    else if(!filePermission.deniedFiles && filePermission.allowedFiles && !allowedFiles) {
      callback(new UnsupportedMediaTypeException(`File type is not matching: ${filePermission.allowedFiles.join(', ')}`), false);
    } else {
      callback(null,true)
    }
  };
}
