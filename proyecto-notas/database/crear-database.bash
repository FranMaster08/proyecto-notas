docker run --name notas-db -e MYSQL_ROOT_PASSWORD=fran -e MYSQL_USER=fran -e MYSQL_PASSWORD=fran -e MYSQL_DATABASE=notas-db -p 3310:3306 -d mysql:8