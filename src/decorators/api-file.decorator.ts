import { fileMimetypeFilter } from '../helpers/file-mimetype';
import { ApiFile } from './api-files.decorator';

export function ApiImageFile(fileName: string = 'file',apiBodyType?:Function) {
  return ApiFile(fileName, apiBodyType,{
    fileFilter: fileMimetypeFilter('image'),
  });
}

export function ApiPdfFile(fileName: string = 'file',apiBodyType?: Function) {
  return ApiFile(fileName, apiBodyType, {
    fileFilter: fileMimetypeFilter('pdf'),
  });
}

export function CustomFile(fileName: string = 'file', customType:string, apiBodyType?: Function) {
  return ApiFile(fileName, apiBodyType, {
    fileFilter: fileMimetypeFilter(customType),
  });
}
