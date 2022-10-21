#!/bin/sh
ROOT_DIR=/app
# Replace env vars in JavaScript files
echo "Replacing env constants in JS"
for file in $(find $ROOT_DIR -maxdepth 2 -type f)
do
  echo "Processing $file ...";
  sed -i 's|/webapps/|'${APP_BASE_PATH}'|g' $file
  sed -i 's|\*GRAPHQLURL\*|'${GRAPHQL_URL_ENV}'|g' $file
  sed -i 's|\*SIGNALRURL\*|'${SIGNALR_URL_ENV}'|g' $file
  sed -i 's|\*DEFAULTLANGUAGE\*|'${DEFAULT_LANGUAGE_ENV}'|g' $file
  sed -i 's|\*APPLICATION_VERSION\*|'${APP_VERSION}'|g' $file

done
echo "Starting Nginx"
nginx -g 'daemon off;'
