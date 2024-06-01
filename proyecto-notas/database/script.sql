
CREATE TABLE IF NOT EXISTS `roles` (
  `rol_id` INT NOT NULL AUTO_INCREMENT,
  `rol_nombre` VARCHAR(45) NULL,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `actualizado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`rol_id`),
  UNIQUE INDEX `rol_nombre_UNIQUE` (`rol_nombre` ASC))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `usuario_nombre` VARCHAR(45) NOT NULL,
  `usuario_email` VARCHAR(45) NOT NULL,
  `usuario_password` VARCHAR(45) NOT NULL,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `actualizado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `roles_rol_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE INDEX `usuario_email_UNIQUE` (`usuario_email` ASC),
  INDEX `fk_usuarios_roles_idx` (`roles_rol_id` ASC),
  CONSTRAINT `fk_usuarios_roles`
    FOREIGN KEY (`roles_rol_id`)
    REFERENCES `roles` (`rol_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `notas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notas` (
  `nota_id` INT NOT NULL AUTO_INCREMENT,
  `nota_contenido` TEXT NULL,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `actualizado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`nota_id`),
  INDEX `fk_notas_usuarios1_idx` (`usuarios_usuario_id` ASC),
  CONSTRAINT `fk_notas_usuarios1`
    FOREIGN KEY (`usuarios_usuario_id`)
    REFERENCES `usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Insertions for `roles`
-- -----------------------------------------------------
INSERT INTO `roles` (`rol_nombre`) VALUES
('Administrador'),
('Editor'),
('Autor'),
('Colaborador'),
('Suscriptor'),
('Invitado'),
('Moderador'),
('Analista'),
('Consultor'),
('Gestor');

-- -----------------------------------------------------
-- Insertions for `usuarios`
-- -----------------------------------------------------
INSERT INTO `usuarios` (`usuario_nombre`, `usuario_email`, `usuario_password`, `roles_rol_id`) VALUES
('Juan Perez', 'juan.perez@example.com', 'password1', 1),
('Maria Garcia', 'maria.garcia@example.com', 'password2', 2),
('Pedro Martinez', 'pedro.martinez@example.com', 'password3', 3),
('Ana Lopez', 'ana.lopez@example.com', 'password4', 4),
('Luis Sanchez', 'luis.sanchez@example.com', 'password5', 5),
('Marta Fernandez', 'marta.fernandez@example.com', 'password6', 6),
('Carlos Gomez', 'carlos.gomez@example.com', 'password7', 7),
('Elena Diaz', 'elena.diaz@example.com', 'password8', 8),
('Jorge Torres', 'jorge.torres@example.com', 'password9', 9),
('Lucia Ramirez', 'lucia.ramirez@example.com', 'password10', 10);

-- -----------------------------------------------------
-- Insertions for `notas`
-- -----------------------------------------------------
INSERT INTO `notas` (`nota_contenido`, `usuarios_usuario_id`) VALUES
('Nota de ejemplo 1', 1),
('Nota de ejemplo 2', 2),
('Nota de ejemplo 3', 3),
('Nota de ejemplo 4', 4),
('Nota de ejemplo 5', 5),
('Nota de ejemplo 6', 6),
('Nota de ejemplo 7', 7),
('Nota de ejemplo 8', 8),
('Nota de ejemplo 9', 9),
('Nota de ejemplo 10', 10);
