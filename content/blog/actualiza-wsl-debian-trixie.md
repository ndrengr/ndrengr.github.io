---
title: 'Actualiza WSL a Debian Trixie'
description: 'Esta es una guía rápida para quienes quieren actualizar su WSL de Debian 12 (BookWorm) a Debian 13 (Trixie) con los comandos en la consola'
image: '/blog/wsl-trixie.jpg'
date: 2025-08-13
tags: ['debian', 'trixie', 'wsl', 'guia']
---

# Guía rápida para actualizar Debian 12 a Debian 13 en WSL

Con la salida oficial de Debian 13 Trixie, y para los que usamos [WSL](https://learn.microsoft.com/es-es/windows/wsl/), les presento esta guía para actualizar a la versión 13 desde la 12 instalada en WSL:

1. Ingresamos a la lista de fuentes para actualizar los repositorios a la versión _Trixie_
  ```bash
  sudo nano /etc/apt/sources.list
  ```
  Y cambiamos de _bookworn_ a _trixie_ como se muestra a continuación:

> deb http://deb.debian.org/debian trixie main

> deb http://deb.debian.org/debian trixie-updates main

> deb http://security.debian.org/debian-security trixie-security main

> deb http://ftp.debian.org/debian trixie-backports main

[_*Ctrl+O y Enter para guardar. Ctrl+X para cerrar*_]

2. Una vez modificada la lista de repositorios, actualizamos las listas:
   ```bash
   sudo apt update
   ```
3. Seguido, actualizamos todos los paquetes (esto puede tomar algo de tiempo)
   ```bash
   sudo apt upgrade -y
   ```
4. Luego, una _*actualización*_ completa del sistema al finalizar la actualización de paquetes:
   ```bash
   sudo apt full-upgrade
   ```
5. Y por último, quitamos los paquetes inútiles para la actualización:
  ```bash
  sudo apt autoremove
  ```

Así, tendremos ya podremos ver nuestro sistema actualizado a la versión oficial.
```bash
cat os-release
```

> PRETTY_NAME="Debian GNU/Linux 13 (trixie)"
> 
> NAME="Debian GNU/Linux"
> 
> VERSION_ID="13"
> 
> VERSION="13 (trixie)"
> 
> VERSION_CODENAME=trixie
> 
> DEBIAN_VERSION_FULL=13.0
> 
> ID=debian
> 
> HOME_URL="https://www.debian.org/"
> 
> SUPPORT_URL="https://www.debian.org/support"
> 
> BUG_REPORT_URL="https://bugs.debian.org/"