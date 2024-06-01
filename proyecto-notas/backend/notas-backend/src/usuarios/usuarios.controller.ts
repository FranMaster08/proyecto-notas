import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from "@nestjs/swagger";

@ApiTags("usuarios")
@Controller("usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: "Crea un nuevo usuario" })
  @ApiResponse({
    status: 201,
    description: "El usuario ha sido creado exitosamente.",
  })
  @ApiResponse({ status: 400, description: "Datos de entrada no válidos." })
  @ApiResponse({ status: 409, description: "Usuario ya existe." })
  @ApiBody({
    type: CreateUsuarioDto,
    description: "Datos para crear un nuevo usuario",
  })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: "Obtiene la lista de todos los usuarios" })
  @ApiResponse({
    status: 200,
    description: "Lista de usuarios obtenida exitosamente.",
  })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obtiene un usuario por ID" })
  @ApiResponse({ status: 200, description: "Usuario encontrado." })
  @ApiResponse({ status: 404, description: "Usuario no encontrado." })
  @ApiParam({ name: "id", description: "ID del usuario a obtener" })
  findOne(@Param("id") id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Actualiza un usuario existente" })
  @ApiResponse({
    status: 200,
    description: "El usuario ha sido actualizado exitosamente.",
  })
  @ApiResponse({ status: 404, description: "Usuario no encontrado." })
  @ApiResponse({ status: 400, description: "Datos de entrada no válidos." })
  @ApiParam({ name: "id", description: "ID del usuario a actualizar" })
  @ApiBody({
    type: UpdateUsuarioDto,
    description: "Datos para actualizar el usuario",
  })
  update(@Param("id") id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Elimina un usuario por ID" })
  @ApiResponse({
    status: 200,
    description: "El usuario ha sido eliminado exitosamente.",
  })
  @ApiResponse({ status: 404, description: "Usuario no encontrado." })
  @ApiParam({ name: "id", description: "ID del usuario a eliminar" })
  remove(@Param("id") id: string) {
    return this.usuariosService.remove(+id);
  }
}
