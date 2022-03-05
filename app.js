const mainSectionID = document.getElementById('main');

function randomNumber(min, max) {
  return Math.floor(Math.random()*max)+min;
}

function loadImages() {
  var container = document.createElement('div');
  var subContainer=document.createElement('div');
  var headerSub = document.createElement('div');
  
  var left=document.createElement('a');
  var profile=document.createElement('span');
  var downArrow=document.createElement('span');
  var button=document.createElement('input');

  var footerSub=document.createElement('div');
  var upload=document.createElement('a');
  var options=document.createElement('a');

  var arrow=document.createElement('img');
  var more=document.createElement('img');

  var widthImage=230;
  var heightImage =randomNumber(100, 300);
  var centralImage=document.createElement('img');

  container.className="container";
  subContainer.className='sub-container';
  headerSub.className='header-sub';
  left.className='left';
  left.href='#';
  profile.className='profile';
  profile.innerHTML='Perfil';
  downArrow.className='down-arrow';
  
  button.type='button';
  button.value='Guardar';
  button.className='right';

  footerSub.className='footer-sub';
  upload.className='upload';
  options.className='options';

  arrow.src='/Pictures/3994414_arrow_interface_send_upload_uploading_icon.png';
  more.src='/Pictures/4280472_more_outlined_options_rollup_icon.png';

  centralImage.width=widthImage;
  centralImage.height=heightImage;
  centralImage.src=`https://picsum.photos/${widthImage}/${heightImage}.jpg`;

  upload.appendChild(arrow);
  options.appendChild(more);

  footerSub.appendChild(upload);
  footerSub.appendChild(options);

  left.appendChild(profile);
  left.appendChild(downArrow);

  headerSub.appendChild(left);
  headerSub.appendChild(button);

  subContainer.appendChild(headerSub);
  subContainer.appendChild(footerSub);

  container.appendChild(subContainer);
  container.appendChild(centralImage);

  mainSectionID.appendChild(container);
}

document.addEventListener('DOMContentLoaded', function() {
  for (let _=0; _<50; _++) {
    loadImages();
  }
 
}, false);