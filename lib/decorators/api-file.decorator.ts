import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { fileMimetypeFilter } from 'lib/helpers/file-mimetype';
import { CustomFileOptions, FileOptions } from '../interface/file.interface';
import { ApiFile } from './api-files.decorator';

export function ApiImageFile(options: FileOptions) {
  return ApiFile(options.fileName, options.apiBodyType, {
    fileFilter: fileMimetypeFilter({ allowedFiles: ['image'] }),
    ...options.localOptions,
  });
}

export function ApiPdfFile(options: FileOptions) {
  return ApiFile(options.fileName, options.apiBodyType, {
    fileFilter: fileMimetypeFilter({ allowedFiles: ['pdf'] }),
    ...options.localOptions,
  });
}

export function CustomFile(options: CustomFileOptions) {
  return ApiFile(options.fileName, options.apiBodyType, {
    fileFilter: fileMimetypeFilter(options.type),
    ...options.localOptions,
  });
}
