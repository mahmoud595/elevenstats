if [ "$TRAVIS_BRANCH" == "development" ]; then
    mv ./frontend/robots-dev.txt ./frontend/tmp/robots.txt
    rm -rf ./frontend/tmp/sitemap.xml
else 
    mv ./frontend/robots-prod.txt ./frontend/tmp/robots.txt

fi

echo NEXT_PUBLIC_ROOT_URL=$NEXT_PUBLIC_ROOT_URL > ./frontend/.env.production
echo NEXT_PUBLIC_SOCKET_URL=$NEXT_PUBLIC_SOCKET_URL >> ./frontend/.env.production
echo NEXT_PUBLIC_AMCHART_LICENCE=$NEXT_PUBLIC_AMCHART_LICENCE >> ./frontend/.env.production
