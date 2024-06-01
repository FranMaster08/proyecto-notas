import { Controller } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('autenticacion')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}
}
