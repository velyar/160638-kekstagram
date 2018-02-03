'use strict';

var PICTURES_COUNT = 25;
var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function getRandomElement(array) {
  return array[parseInt(Math.random() * 100 * array.length, 10) % array.length];
}

function createPictureObject(id) {
  return {
    url: 'photos/' + id + '.jpg',
    likes: 15 + Math.floor(Math.random() * 185),
    comments: (Math.random() > 0.5) ?
      [getRandomElement(COMMENTS)] :
      [getRandomElement(COMMENTS), getRandomElement(COMMENTS)]
  };
}

function createPictureElement(picture) {
  var pictureElement = document.querySelector('#picture-template').content.cloneNode(true);

  pictureElement.querySelector('img').src = picture.url;
  pictureElement.querySelector('.picture-likes').innerHTML = picture.likes;
  pictureElement.querySelector('.picture-comments').innerHTML = picture.comments.length;

  return pictureElement;
}

(function () {
  var pictures = [];
  for (var i = 0; i < PICTURES_COUNT; i++) {
    pictures.push(
        createPictureObject(i + 1)
    );
  }
  var fragment = document.createDocumentFragment();
  for (i = 0; i < PICTURES_COUNT; i++) {
    fragment.appendChild(createPictureElement(pictures[i]));
  }
  document.querySelector('.pictures').appendChild(fragment);

  document.querySelector('.upload-overlay').classList.add('hidden');

  var galeryOverlay = document.querySelector('.gallery-overlay');
  galeryOverlay.classList.remove('hidden');
  galeryOverlay.querySelector('.gallery-overlay-image').src = pictures[0].url;
  galeryOverlay.querySelector('.likes-count').innerHTML = pictures[0].likes;
  galeryOverlay.querySelector('.comments-count').innerHTML = pictures[0].comments.length;
})();
