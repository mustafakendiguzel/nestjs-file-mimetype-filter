// import {
//   Body,
//   Controller,
//   Post,
//   UnprocessableEntityException,
//   UploadedFile,
// } from '@nestjs/common';
// import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
// import { CreateConsentFormDto } from './dto/create-consent-form.dto';
// import { ConsentFormBody } from './types/consent-FormBody';
// import { ApiPdfFile } from 'nestjs-file-mimetype-filter';


// @ApiTags('Consent Form')
// @ApiBearerAuth('access_token')
// @Controller('consent-form')
// export class ConsentFormController {

//   @ApiPdfFile({fileName:'file', apiBodyType:ConsentFormBody })

//   @Post()
//   async create(@UploadedFile() file: Express.Multer.File, @Body() body: CreateConsentFormDto) {
//     if (!file) {
//       throw new UnprocessableEntityException('File is required!');
//     }
//   }
 
// }
