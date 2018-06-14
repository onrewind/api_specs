# api_specs
On Rewind API specifications (in OpenAPI/Swagger) used in http://doc-api.onrewind.tv


docker pull swaggerapi/swagger-ui
docker run -p 80:8080 swaggerapi/swagger-ui
docker run -p 3300:8080 -e SWAGGER_YAML=/dist/spec.yaml -v dist:/src swaggerapi/swagger-ui
