import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
} from "@nestjs/common";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuarios } from "../shared/entities/Usuarios";
import { Repository } from "typeorm";

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios, "notas-db")
    private readonly usuarioRepository: Repository<Usuarios>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    try {
      return await this.usuarioRepository.save(usuario);
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        // Código de error para entrada duplicada en MySQL
        throw new ConflictException("Email already exists");
      } else {
        throw new InternalServerErrorException("Error creating user");
      }
    }
  }

  async findAll() {
    try {
      return await this.usuarioRepository.find({
        relations: ["rolesRol"],
      });
    } catch (error) {
      throw new InternalServerErrorException("Error fetching users");
    }
  }

  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({
      where: { usuarioId: id },
      relations: ["rolesRol"],
    });
    if (!usuario) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const result = await this.usuarioRepository.update(id, updateUsuarioDto);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.usuarioRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { deleted: true };
  }
}
