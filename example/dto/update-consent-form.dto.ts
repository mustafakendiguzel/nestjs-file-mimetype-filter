import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class UpdateConsentFormDto {
  @IsString()
  @ApiProperty({ required: false })
  @MaxLength(255)
  @IsOptional()
  name: string;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1)
  @ApiProperty({ required: false })
  @Max(99)
  @IsOptional()
  version: number;
}
