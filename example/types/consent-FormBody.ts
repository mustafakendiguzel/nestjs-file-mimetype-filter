import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

export function ConsentFormBody() {
  return applyDecorators(
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          file: {
            type: 'string',
            format: 'binary',
          },
          fileId: { type: 'string', nullable: true },
          groupId: { type: 'string' },
        },
      },
    })
  );
}
