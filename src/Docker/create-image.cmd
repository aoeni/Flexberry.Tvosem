docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tvosem/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tvosem/app ../..
