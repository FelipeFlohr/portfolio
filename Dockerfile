FROM node:alpine

# Copying source and public files
COPY public /home/app/public
COPY src /home/app/src

# Copying root files
COPY .eslintrc.json /home/app
COPY next-env.d.ts /home/app
COPY next.config.js /home/app
COPY package.json /home/app
COPY tsconfig.json /home/app
COPY yarn.lock /home/app

# Installing deps
WORKDIR /home/app
RUN yarn install
RUN yarn build

# Finishing
EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]