# api_specs [![Build Status](https://travis-ci.org/OnRewind/api_specs.svg?branch=master)](https://travis-ci.org/OnRewind/api_specs)
On Rewind API specifications (in OpenAPI/Swagger) used in http://doc-api.onrewind.tv
Generate Slate static site from these specifications

The following commands are available using npm:

 - `openapi:compile` : compile splited openapi spec files into one
 - `openapi:watch` : open a swagger ui preview in your browser, hot reload enabled if you modify any specs
 - `slate:init` : transpile openapi spec into slate spec and copy slate resources into tmp folder, should be run for any changes
 - `slate:preview`: open a slate preview in your browser, based on content in tmp folder
 - `slate:compile` : compile all files to build a slate static site into dist folder, based on content in tmp folder
 - `docker:init` : build docker image needed for slate
 - `dist` : combine commands to generate openapi spec and static site in one go
