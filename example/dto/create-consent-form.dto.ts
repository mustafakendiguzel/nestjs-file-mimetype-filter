import { IsNumber, IsOptional, IsString, IsUUID, Max, MaxLength, Min, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConsentFormDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  name: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 0 })
  @ApiProperty({ required: false })
  @Min(1)
  @Max(999999)
  @IsOptional()
  version: number;

  @IsUUID()
  @ApiProperty({ required: false })
  @IsOptional()
  @ValidateIf((o) => o.fileId !== '')
  fileId: string;

  @IsUUID()
  @ApiProperty({ required: true })
  groupId: string;
}
