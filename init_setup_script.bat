@echo off

echo Stopping mysql docker container if running...
docker stop paymendemo-database-mysql-1 || echo No running container to stop.

echo Running mysql docker container...
call docker compose up -d database-mysql || echo Docker container already running.

echo Running Prisma Migrate Reset...
call npx prisma migrate reset --force

echo Running Prisma DB Push...
call npx prisma db push

echo Seeding data...
call npm run seed-data