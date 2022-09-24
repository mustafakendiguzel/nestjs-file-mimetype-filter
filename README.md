
<a href="https://www.npmjs.com/package/nestjs-file-mimetype-filter" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/nestjs-file-mimetype-filter" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/nestjs-file-mimetype-filter" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>


## Description

[Nestjs file mimetype filter](https://github.com/mustafakendiguzel/nestjs-file-mimetype-filter) framework where you can filter the filemimetype of the file you are going to upload.

## Install

```bash
$ npm install nestjs-file-mimetype-filter
```

## Quick Start

```bash
# For import
$ import { ApiPdfFile,ApiImageFile,CustomFile } from 'nestjs-file-mimetype-filter';

```

## Example Usage
String of 'file' is the parameter name for uploadedFile from body.(default:'file')
```bash
@ApiPdfFile('file')
  @Post()
  async create(@UploadedFile() file: Express.Multer.File, @Body() body: CreateConsentFormDto) {
    if (!file) {
      throw new UnprocessableEntityException('File is required!');
  }

```
You can combine with Swagger if you want 
```bash
@ApiPdfFile('file',consentFormBody)
  @Post()
  async create(@UploadedFile() file: Express.Multer.File, @Body() body: CreateConsentFormDto) {
    if (!file) {
      throw new UnprocessableEntityException('File is required!');
  }

```

## ConsentFormBody Example 
```bash
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
        },
      },
    })
  );
}
```

## Other Usage

You can use for filtering images 
```bash
@ApiImageFile('file',consentFormBody)
#or Custom FileMimetype
@CustomFile('file','audio',consentFormBody)
```



## Stay in touch

- Author - Mustafa Kendigüzel


## License

Nestjs-file-mimetype-filter [MIT licensed](LICENSE).
