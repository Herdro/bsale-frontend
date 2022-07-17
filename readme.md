# Desafia bsale (frontend)

Construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen..

## Programas necesarios

para poder utilizar el proyecto en localhost en necesario clonar y tener los siguientes programas:

* IDE de desarrollo
* [GIT](https://git-scm.com/downloads) para gestionar las versiones.

## Clonar Proyecto

```bash
cd existing_folder
git clone git@github.com:Herdro/bsale-frontend.git

```

## Instalación

Una vez ya clonado el repositorio es necesario instalar las dependencias con el siguiente comando:

```bash
npm install
```

## Iniciar en localhost

Para iniciar solo debe ejecutar el siguiente comando:

```bash
npm run start
```

El cual ejecutará `webpack serve --open` que le permitirá ver los cambios actualizados que realize en el codigo

## Despliegue 📦

Para iniciar el proyecto para producción se debe ejecutar el siguiente codigo

```bash
npm run build
```

El cual ejecutará `webpack --mode production` creando la distribución del proyecto en la carpeta raiz `./dist`

## Estructura

El proyecto esta contruido en react que se compone de una sola pagina, la cual hara diferentes peticiones que la APIrest, esta le responderá con la  información que requiera. El repositorio de la API se encuentre [aqui](https://github.com/Herdro/bsale-backend)

A continuacion un diagrama del funcionamiento de APP:

![image](https://i.ibb.co/JK24Jkc/bdsale-front.png)
