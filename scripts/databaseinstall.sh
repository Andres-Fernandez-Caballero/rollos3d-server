#!/usr/bin/env bash

cd src/database/
printf "${LIGTH_RED}Creando Base de datos\n${LIGTH_CYAN}"
./../../node_modules/.bin/env-cmd -f ./../../.env sequelize db:create

printf "${LIGTH_RED}Migrando Tablas\n${LIGTH_CYAN}"
./../../node_modules/.bin/env-cmd -f ./../../.env sequelize db:migrate


printf "${LIGTH_RED}Sembrando Datos Falsos\n${LIGTH_CYAN}"
./../../node_modules/.bin/env-cmd -f ./../../.env sequelize db:seed:all

