FROM node
WORKDIR /Tomato
COPY . .
RUN yarn install --production
CMD ["node", "index.HTML", "script.js", "styles.css", "backtowork.mp3", "break.mp3", "button-sound.mp3"]