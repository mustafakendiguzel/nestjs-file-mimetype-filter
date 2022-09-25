import { fileMimetypeFilter } from '@app/helpers/file-mimetype';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { ApiFile } from './api-files.decorator';

export function ApiImageFile(fileName: string = 'file', localOptions?: MulterOptions, apiBodyType?: Function) {
  return ApiFile(fileName, apiBodyType, {
    fileFilter: fileMimetypeFilter('image'),
    ...localOptions,
  });
}

export function ApiPdfFile(fileName: string = 'file', localOptions?: MulterOptions,apiBodyType?: Function) {
  return ApiFile(fileName, apiBodyType, {
    fileFilter: fileMimetypeFilter('pdf'),
    ...localOptions
  });
}

export function CustomFile(fileName: string = 'file', customType: string, localOptions?: MulterOptions, apiBodyType?: Function) {
  return ApiFile(fileName, apiBodyType, {
    fileFilter: fileMimetypeFilter(customType),
    ...localOptions
  });
}
