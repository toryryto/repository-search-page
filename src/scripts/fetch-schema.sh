curl -sL https://docs.github.com/public/fpt/schema.docs.graphql \
     -o src/graphql/schema.graphql

if [ $? -eq 0 ]; then
  echo "스키마 다운로드 완료"
else
  echo "스키마 다운로드 실패"
  exit 1
fi
