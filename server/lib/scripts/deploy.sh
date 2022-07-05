IMAGE_NAME="elden-ring-app-docker"
REGISTRY_URL="registry.digitalocean.com/tcd-digital-ocean-docker-registry"
REGISTRY_AND_IMAGE_URL="$REGISTRY_URL/$IMAGE_NAME"

docker tag $IMAGE_NAME $REGISTRY_AND_IMAGE_URL
docker push $REGISTRY_AND_IMAGE_URL
