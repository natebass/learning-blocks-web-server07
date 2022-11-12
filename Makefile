.DEFAULT_GOAL := help
.EXPORT_ALL_VARIABLES:
UID = $(shell id -u)
AWS_REGION = us-east-2
PROJECT_NAME = $(shell basename $(PWD))

build_image:
		docker-compose \
		-p ${PROJECT_NAME} \
		--profile build \
		--file ./localdev/docker-compose.yaml up \
		--build

local: build_image
	docker-compose \
		-p ${PROJECT_NAME} \
		--profile run \
		--file ./localdev/docker-compose.yaml up \
		--remove-orphans
