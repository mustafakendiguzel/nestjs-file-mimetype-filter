import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export function ApiFile(
  fieldName: string = 'file',
  apiBodyType?: Function,
  localOptions?: MulterOptions,
) {
  if (apiBodyType) {
    return applyDecorators(
      UseInterceptors(FileInterceptor(fieldName, localOptions)),
      ApiConsumes('multipart/form-data'),
      apiBodyType(),
    );
  } else {
    return applyDecorators(
      UseInterceptors(FileInterceptor(fieldName, localOptions)),
    );
  }
}
