import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export interface FileOptions {
  fileName: string;
  apiBodyType?: Function;
  localOptions?: MulterOptions;
}

export interface CustomFileOptions extends FileOptions {
  type:{
    allowedFiles?:string[];
    deniedFiles?:string[];
  };
}