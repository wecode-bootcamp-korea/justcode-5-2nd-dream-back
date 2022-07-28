#./Dockerfile
FROM node:16
# 기반이 될 이미지

# 작업디렉토리(default) 설정
WORKDIR /usr/src/app

## Install packages
# 현재 패키지 설치 정보를 도커 이미지에 복사. package-lock.json도 복사하는 것이 안전.
COPY package*.json ./
# 프리즈마 스키마의 위치를 한 디렉토리 상위로 이동하여 복사
COPY ./prisma/schema.prisma ./
# 설치정보를 읽어 들여서 패키지를 설치
RUN npm install

## Copy all src files
# 현재 경로에 존재하는 모든 소스파일을 이미지에 복사
COPY . .


## Run the application on the port 8000
# 8000번 포트를 외부에 개방하도록 설정
EXPOSE 10010

# === 도커가 이미지를 빌드할 때의 명렁어 

CMD ["npm", "start"]

# ========== 이미지가 실행됐을 때 처음에 실행될 명령어