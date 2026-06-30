# 2.1.2 — Active Directory y gestión de objetos

## Creación del dominio

Se promovió el servidor `SRV-DC01` a controlador de dominio, creando un
nuevo bosque con el dominio raíz `inacap.local`. Tras la promoción, el
servidor pasó a actuar como controlador de dominio, con los servicios de
Active Directory y DNS activos de forma automática.

![Dominio creado](img_gonmar/02_dominio_creado.png)

## Unidad organizativa (OU)

Se creó la unidad organizativa **Ventas** dentro de `inacap.local`, con el
objetivo de agrupar los objetos (usuarios y grupos) correspondientes al
área comercial de la organización simulada. Esta estructura permite aplicar
políticas de grupo (GPO) de forma centralizada solo a los miembros de esta
unidad, sin afectar al resto del dominio.

![OU Ventas con usuarios](img_gonmar/02_ou_ventas.png)

## Usuarios creados

Dentro de la OU Ventas se crearon dos usuarios:

- **gonmar** — Maribel González (usuario personal, código de identificación
  según nomenclatura del curso)
- **Nurit Cavada** — segundo usuario de prueba para cumplir el requisito de
  la rúbrica

![Usuarios en la OU Ventas](img_gonmar/02_usuarios.png)

## Grupo de seguridad

Se creó el grupo de seguridad **G-Ventas** dentro de la OU Ventas, y se
agregaron como miembros a los dos usuarios creados (Maribel González y
Nurit Cavada). El propósito de este grupo es centralizar permisos y
políticas para todos los usuarios del área de Ventas en un solo objeto,
en lugar de asignarlos usuario por usuario.

![Grupo G-Ventas con sus miembros](img_gonmar/02_grupo_gventas.png)

## Resumen

| Objeto | Nombre | Ubicación |
|---|---|---|
| Dominio | inacap.local | Raíz del bosque |
| OU | Ventas | inacap.local |
| Usuario 1 | gonmar (Maribel González) | inacap.local/Ventas |
| Usuario 2 | Nurit Cavada | inacap.local/Ventas |
| Grupo | G-Ventas | inacap.local/Ventas |